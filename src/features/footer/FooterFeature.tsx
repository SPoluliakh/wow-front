'use client';
import { theme } from '@/common/theme';
import { Box, Container, ThemeProvider } from '@mui/material';

export const FooterFeature = () => (
  <ThemeProvider theme={theme}>
    <Box component="footer" sx={{ py: '128px' }}>
      <Container>Footer</Container>
    </Box>
  </ThemeProvider>
);
