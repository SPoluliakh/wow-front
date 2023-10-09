'use client';
import { theme } from '@/common/theme';
import { Box, Container, ThemeProvider } from '@mui/material';
import { Copyright } from './components';
import { usePosition } from './hooks';
import { Contacts } from '@/common/components';

export const FooterFeature = () => {
  const { justifyContent, alignItems, flexDirection, gap, paddingBottom } = usePosition();

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{
          backgroundColor: 'primary.c700',
          paddingTop: '20px',
          paddingBottom,
        }}
      >
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent,
              alignItems,
              flexDirection,
              gap,
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
