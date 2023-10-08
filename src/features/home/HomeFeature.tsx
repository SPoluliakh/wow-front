'use client';
import { Stack, ThemeProvider } from '@mui/material';
import { theme } from '@/common/theme';
import { ArrowUp } from '@/common/components/ArrowUp';
import { Banner } from './Banner';
import { Contacts } from './Contacts';
import { Services } from './Services';
import { About } from './About';

export const HomeFeature = () => (
  <ThemeProvider theme={theme}>
    <Stack>
      <Banner />
      <About />
      <Services />
      <Contacts />
    </Stack>
    <ArrowUp />
  </ThemeProvider>
);
