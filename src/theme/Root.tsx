import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@horizontal-org/shira-ui';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
}