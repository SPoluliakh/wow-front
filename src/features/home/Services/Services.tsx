'use client';
import { Container, Stack, ThemeProvider, Typography } from '@mui/material';
import { theme } from '@/common/theme';

export const Services = () => (
  <ThemeProvider theme={theme}>
    <Stack gap={{ xs: 8, sm: 16 }}>
      <Container>
        <Typography>Services</Typography>
      </Container>
    </Stack>
  </ThemeProvider>
);
