import useRouteContext from '@docusaurus/useRouteContext';

/**
 * The site serves two sections from the same root path (docs uses
 * `routeBasePath: '/'`), so URLs alone can't tell them apart. The route context
 * carries the plugin that owns the current route, which can.
 *
 * 'docs' = help center (docusaurus-plugin-content-docs)
 * 'site' = marketing pages (src/pages)
 */
export function useNavbarVariant() {
  const {plugin} = useRouteContext();
  return plugin.name === 'docusaurus-plugin-content-docs' ? 'docs' : 'site';
}
