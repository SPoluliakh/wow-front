'use client';
import { Container, Box } from '@mui/material';
import { BgBubbles, AboutText } from './components';
import { useStyle } from './hooks';

export const About = () => {
  const { py } = useStyle();

  return (
    <Box id="about" sx={{ backgroundColor: 'primary.c800', position: 'relative' }}>
      <BgBubbles />
      <Container sx={{ py }}>
        <AboutText />
      </Container>
    </Box>
  );
};
