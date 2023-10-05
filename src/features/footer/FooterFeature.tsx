'use client';
import { theme } from '@/common/theme';
import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MailOutline from '@mui/icons-material/MailOutline';

export const FooterFeature = () => (
  <ThemeProvider theme={theme}>
    <Box component="footer" sx={{ py: '128px' }}>
      <Container>
        <Typography variant="p5" component="p" color="primary.c900">
          &copy; WOW! Clean and shine 2023. All rights reserved.
        </Typography>
        <MailOutline />
        <Typography
          variant="p5"
          component="a"
          color="primary.c900"
          href="mailto:wowcleanandshine@gmail.com"
        >
          wowcleanandshine@gmail.com
        </Typography>
        <Typography variant="p5" component="a" color="primary.c900" href="tel:8036341263">
          <CallIcon />
          (803)634-1263 (803)507-2505
        </Typography>
      </Container>
    </Box>
  </ThemeProvider>
);
