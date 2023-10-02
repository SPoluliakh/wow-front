'use client';
import { Stack, ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { Banner } from './Banner';

export const AboutFeature = () => (
  <ThemeProvider theme={theme}>
    <Stack>
      <Banner />
    </Stack>
  </ThemeProvider>
);
