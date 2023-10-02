'use client';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { NotFound } from './NotFound';

export const NotFoundFeature = () => (
  <ThemeProvider theme={theme}>
    <NotFound />
  </ThemeProvider>
);
