'use client';
import { Container, ThemeProvider, Typography } from '@mui/material';
import { theme } from '@/common/theme';

export const ContactsFeature = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography>ContactsFeature</Typography>
      </Container>
    </ThemeProvider>
  );
};
