'use client';

import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/utils/theme';

/**
 * Custom Theme Provider component that wraps the application with Material UI's ThemeProvider
 * and applies the custom theme defined in utils/theme.js
 */
export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
} 