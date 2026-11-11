[![Translation status](https://hosted.weblate.org/widget/shira/svg-badge.svg)](https://hosted.weblate.org/engage/shira/)

# Welcome to shira.app codebase

This repository contains the source code for [shira.app](https://shira.app), Shira's public website, including the [Help Center](https://shira.app/help) with user documentation. It's built with [Docusaurus](https://docusaurus.io/).

Looking for Shira's application code? See [Horizontal-org/shira](https://github.com/Horizontal-org/shira).

## Installation {#installation}

```bash
yarn
```

## Environment variables {#environment-variables}

The following environment variables configure the URLs for each environment. Copy `.env.example` to `.env` and adjust as needed.

| Variable | Description | Default |
|---|---|---|
| `SPACE_URL` | Base URL for Shira Space (signup/login) | `https://alpha.space.shira.app` |
| `QUIZ_URL` | Base URL for the quiz app | `https://alpha.quiz.shira.app` |

## Local Development {#local-development}

```bash
SPACE_URL='https://space.shira.app' QUIZ_URL='https://quiz.shira.app' yarn start
```

## Build {#build}

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Translations

Shira is translated by the community on [Weblate](https://hosted.weblate.org/projects/shira/). If you'd like to help make Shira available in your language, you can join and start translating there — no coding required. If you need any help, please [contact us!](https://shira.app/contact/)


