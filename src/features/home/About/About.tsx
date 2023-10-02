'use client';
import { Container, ThemeProvider, Typography } from '@mui/material';
import { theme } from '@/common/theme';

export const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography>About</Typography>
      </Container>
    </ThemeProvider>
  );
};
