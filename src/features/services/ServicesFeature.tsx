'use client';
import { Container, Stack, ThemeProvider, Typography } from '@mui/material';
import { theme } from '@/common/theme';

export const ServicesFeature = () => (
  <ThemeProvider theme={theme}>
    <Stack gap={{ xs: 8, sm: 16 }}>
      <Container>
        <Typography>AboutFeature</Typography>
      </Container>
    </Stack>
  </ThemeProvider>
);
