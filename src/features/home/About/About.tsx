'use client';
import { Container, Box } from '@mui/material';
import { useMedia } from '@/common/hooks';
import { BgBubbles, AboutText } from './components';

export const About = () => {
  const { isSmUp, isMdUp } = useMedia();

  return (
    <Box id="about" sx={{ backgroundColor: 'primary.c800', position: 'relative' }}>
      <BgBubbles />
      <Container
        sx={{
          py: !isSmUp ? '20px' : isMdUp ? '80px' : '40px',
        }}
      >
        <AboutText />
      </Container>
    </Box>
  );
};
