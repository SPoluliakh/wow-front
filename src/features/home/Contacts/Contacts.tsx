'use client';
import { Container, ThemeProvider, Typography } from '@mui/material';
import { theme } from '@/common/theme';

export const Contacts = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography>Contacts</Typography>
      </Container>
    </ThemeProvider>
  );
};
