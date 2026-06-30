#!/usr/bin/env python3
"""
Fix translation bugs reintroduced by Weblate on every pull.
Run from the repo root: python3 fix_translations.py
"""
import os
import re
import glob
import subprocess

LOCALES = ['es', 'fr', 'ar', 'ru', 'zh_Hans', 'fa', 'id', 'sw']


def _all_locale_files(locale):
    return glob.glob(
        f'i18n/{locale}/docusaurus-plugin-content-docs/current/**/*.md*',
        recursive=True,
    )


def _git_show(ref):
    result = subprocess.run(['git', 'show', ref], capture_output=True, text=True)
    return result.stdout if result.returncode == 0 else None


# ── Admonitions ───────────────────────────────────────────────────────────────

def _fix_admonitions_content(content):
    original = content

    # Pattern A — backslash: :::type \ ... \ :::
    content = re.sub(r'(:::(?:note|warning|tip|info|danger)) ?\\\n', r'\1\n', content)
    content = re.sub(r' \\\n(:::)', r'\n\1', content)
    content = re.sub(r'\\\n(:::)', r'\n\1', content)

    # Pattern B — inline opener: :::type content  or  missing type keyword
    content = re.sub(r'^:::([^:\n\[a-z])', r':::note\n\1', content, flags=re.MULTILINE)
    content = re.sub(r'^(:::(?:note|warning|tip|info|danger)) *(\S)', r'\1\n\2', content, flags=re.MULTILINE)

    # Pattern B — inline closer: content ::: or content. : ::
    content = re.sub(r'([^\n:]) ?:::[ \t]*$', r'\1\n:::', content, flags=re.MULTILINE)
    content = re.sub(r' : ::[ \t]*$', r'\n:::', content, flags=re.MULTILINE)

    return content, content != original


def fix_admonitions():
    """Fix all broken admonition patterns in all locale files."""
    for locale in LOCALES:
        for path in _all_locale_files(locale):
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            fixed, changed = _fix_admonitions_content(content)
            if changed:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(fixed)
                print(f'  Fixed admonitions: {path}')


# ── French frontmatter ────────────────────────────────────────────────────────

def fix_french_frontmatter():
    """Fix frontmatter bugs inserted by Weblate in fr files:
    - Opener --- corrupted to -- (two dashes)
    - Closer --- corrupted to … (U+2026 ellipsis)
    - Non-breaking spaces (\xa0) in key names
    """
    for path in _all_locale_files('fr'):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        lines = content.split('\n')
        changed = False

        # Opener corrupted: -- instead of ---
        if lines and lines[0] == '--':
            lines[0] = '---'
            changed = True

        # Closer corrupted: … (U+2026) instead of ---
        if lines and lines[0].strip() == '---':
            for i, line in enumerate(lines[1:15], 1):
                if line.strip() == '…':
                    lines[i] = '---'
                    changed = True
                    break

        if changed:
            content = '\n'.join(lines)

        parts = content.split('---', 2)
        if len(parts) < 3:
            if changed:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'  Fixed frontmatter (delimiter): {path}')
            continue

        fm = parts[1]
        original_fm = fm
        # Remove \xa0 and extra spaces between key name and colon, lowercase the key
        fm = re.sub(r'^([A-Za-z_][A-Za-z_]*)[\xa0\s]+:', lambda m: m.group(1).lower() + ':', fm, flags=re.MULTILINE)
        fm = re.sub(r'\xa0:', ':', fm)

        if fm != original_fm or changed:
            with open(path, 'w', encoding='utf-8') as f:
                f.write('---' + fm + '---' + parts[2])
            print(f'  Fixed frontmatter: {path}')


# ── Descriptions ──────────────────────────────────────────────────────────────

def _extract_description(content):
    if not content:
        return None
    m = re.search(r'^description:\s*(.+)', content, re.MULTILINE)
    return m.group(1).strip() if m else None


def fix_description_translations(source_branch='development'):
    """Restore translated frontmatter descriptions that Weblate reset to English.

    Only restores if:
      - the English source description has NOT changed since source_branch, and
      - source_branch already has a real (non-English) translation.
    """
    for locale in LOCALES:
        for path in _all_locale_files(locale):
            rel = path.removeprefix(f'i18n/{locale}/docusaurus-plugin-content-docs/current/')

            with open(path, 'r', encoding='utf-8') as f:
                cur_content = f.read()
            cur_desc = _extract_description(cur_content)
            if not cur_desc:
                continue

            dev_trans = _extract_description(
                _git_show(f'{source_branch}:i18n/{locale}/docusaurus-plugin-content-docs/current/{rel}')
            )
            if not dev_trans or dev_trans == cur_desc:
                continue

            en_src_path = f'docs/{rel}'
            if not os.path.exists(en_src_path):
                continue
            with open(en_src_path, 'r', encoding='utf-8') as f:
                en_cur = _extract_description(f.read())
            en_dev = _extract_description(_git_show(f'{source_branch}:docs/{rel}'))

            if en_cur != en_dev:
                continue  # English source changed — leave in English

            if dev_trans == en_dev:
                continue  # dev "translation" is itself English — nothing to restore

            new_content = re.sub(
                r'^(description:\s*)(.+)$',
                lambda m: m.group(1) + dev_trans,
                cur_content,
                count=1,
                flags=re.MULTILINE,
            )
            if new_content != cur_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'  Fixed description: {path}')


# ── Headings ──────────────────────────────────────────────────────────────────

_HEADING_RE = re.compile(r'^(#+)\s+(.*?)\s*(\{/\* #([\w-]+) \*/\})[ \t]*$', re.MULTILINE)


def fix_heading_translations(source_branch='development'):
    """Restore translated headings that Weblate reset to English.

    Matches headings by their {/* #id */} slug. Restores the translated text
    from source_branch if the heading exists there with a different value.
    """
    for locale in LOCALES:
        for path in _all_locale_files(locale):
            rel = path.removeprefix(f'i18n/{locale}/docusaurus-plugin-content-docs/current/')

            dev_content = _git_show(
                f'{source_branch}:i18n/{locale}/docusaurus-plugin-content-docs/current/{rel}'
            )
            if not dev_content:
                continue

            dev_headings = {m.group(4): m.group(0) for m in _HEADING_RE.finditer(dev_content)}
            if not dev_headings:
                continue

            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            original = content

            content = _HEADING_RE.sub(
                lambda m: dev_headings.get(m.group(4), m.group(0)),
                content,
            )

            if content != original:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'  Fixed headings: {path}')


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    print("=== Fixing admonitions ===")
    fix_admonitions()

    print("\n=== Fixing French frontmatter ===")
    fix_french_frontmatter()

    print("\n=== Restoring translated descriptions from development ===")
    fix_description_translations()

    print("\n=== Restoring translated headings from development ===")
    fix_heading_translations()

    print("\nDone.")


if __name__ == '__main__':
    main()
