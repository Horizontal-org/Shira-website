import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { defaultTheme } from '@horizontal-org/shira-ui';

const DarkModeButtonFix = createGlobalStyle`
  [data-theme='dark'] button {
    color: white;
  }
`;

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    dark: {
      black:      'var(--ifm-color-primary-darkest)',
      lightGrey:  'var(--ifm-color-primary-lighter)',
      darkGrey:   'var(--ifm-color-primary-darker)',
      mediumGrey: 'var(--ifm-color-primary-darker)',
      overlay:    defaultTheme.colors.dark.overlay,
    },
    light: {
      white:     'var(--ifm-color-primary-lightest)',
      paleGrey:  'var(--ifm-color-primary-lighter)',
      paleGreen: 'var(--ifm-color-primary-light)',
      paleRed:   defaultTheme.colors.light.paleRed,
    },
    green7: 'var(--ifm-color-primary)',
    green6: 'var(--ifm-color-primary)',
  },
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <DarkModeButtonFix />
      {children}
    </ThemeProvider>
  );
}
