'use client';
import { Container, ThemeProvider, Typography, Box } from '@mui/material';
import { theme } from '@/common/theme';
import { useAboutData } from './hooks';
import { AboutData } from './interfaces';
import { useMedia } from '@/common/hooks';

export const About = () => {
  const data: AboutData = useAboutData();
  const { isSmUp, isMdUp } = useMedia();

  return (
    <ThemeProvider theme={theme}>
      <Box id="about" sx={{ backgroundColor: 'primary.c800' }}>
        <Container>
          <Box sx={{ paddingLeft: isMdUp ? '100px' : '0', paddingRight: isMdUp ? '100px' : '0' }}>
            <Typography
              variant="h3"
              component="h3"
              color="primary.c900"
              sx={{ marginBottom: isSmUp ? '40px' : '20px', textAlign: 'center' }}
            >
              {data.title}
            </Typography>
            <Typography
              variant="p3"
              component="p"
              color="primary.c900"
              sx={{ marginBottom: '40px' }}
            >
              {data.text[0]}
            </Typography>
            <Typography variant="p3" component="p" color="primary.c900">
              {data.text[1]}
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
