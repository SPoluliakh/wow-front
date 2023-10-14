'use client';
import { theme } from '@/common/theme';
import { Box, Container, ThemeProvider } from '@mui/material';
import { Copyright } from './components';
import { Contacts } from '@/common/components';

export const FooterFeature = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{
          backgroundColor: 'primary.c700',
          pt: '20px',
          pb: { xs: '20px', sm: '40px', md: '80px' },
        }}
      >
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'space-between' },
              alignItems: { xs: 'center', sm: 'flex-start' },
              flexDirection: { xs: 'column-reverse', sm: 'row' },
              gap: { xs: '32px', sm: 0 },
            }}
          >
            <Copyright />
            <Contacts />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
