'use client';
import { theme } from '@/common/theme';
import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MailOutline from '@mui/icons-material/MailOutline';

export const FooterFeature = () => (
  <ThemeProvider theme={theme}>
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.c700',
        paddingTop: '20px',
        paddingBottom: '80px',
      }}
    >
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="p5" component="p" color="primary.c900">
            &copy; WOW! Clean and shine 2023. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: '40px' }}>
            <Box
              sx={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}
            >
              <MailOutline />
              <Typography
                variant="p5"
                component="a"
                color="primary.c900"
                href="mailto:wowcleanandshine@gmail.com"
              >
                wowcleanandshine@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}
            >
              <CallIcon />
              <Typography
                variant="p5"
                component="a"
                color="primary.c900"
                href="tel:8036341263"
                sx={{ mr: '16px' }}
              >
                (803)634-1263
              </Typography>

              <Typography variant="p5" component="a" color="primary.c900" href="tel:8035072505">
                (803)507-2505
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  </ThemeProvider>
);
