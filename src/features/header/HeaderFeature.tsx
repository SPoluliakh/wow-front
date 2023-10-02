'use client';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { Header } from './Header';

export const HeaderFeature = () => (
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
);
