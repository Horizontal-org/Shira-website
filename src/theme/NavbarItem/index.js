import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import {useNavbarVariant} from '@site/src/theme/navbarVariant';

/**
 * Marker classes set on navbar items in docusaurus.config.js. `className` is
 * the only field allowed on every navbar item type (the `search` item schema
 * rejects custom keys), so it doubles as the visibility marker.
 */
const ONLY_IN = {
  'navbar--docs-only': 'docs',
  'navbar--site-only': 'site',
};

// Both the desktop navbar and the mobile sidebar render items through
// @theme/NavbarItem, so filtering here covers each one, dropdown items included.
export default function NavbarItemWrapper(props) {
  const variant = useNavbarVariant();
  const restrictedTo = (props.className ?? '')
    .split(/\s+/)
    .map((className) => ONLY_IN[className])
    .find(Boolean);

  if (restrictedTo && restrictedTo !== variant) {
    return null;
  }
  return <NavbarItem {...props} />;
}
