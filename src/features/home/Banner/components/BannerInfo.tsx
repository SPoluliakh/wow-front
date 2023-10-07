import { CallbackBtn } from '@/common/components/CallbackBtn';
import { Logo } from '@/common/components/Logo';
import { Box, Typography } from '@mui/material';

export const BannerInfo = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Logo variant="banner" />
      <Box>
        <Typography component="h1" variant="h1" color="primary.c900" sx={{ mb: '62px' }}>
          WOW!
        </Typography>
        <Typography component="h2" variant="h2" color="accent.c900">
          CLEAN & SHINE
        </Typography>
      </Box>
    </Box>
    <Box>
      <CallbackBtn variant="REQUEST A CALLBACK" />
      <CallbackBtn
        variant="BOOK A FREE ESTIMATE"
        sx={{ backgroundColor: 'primary.c100', color: 'primary.c900', ml: '24px' }}
      />
    </Box>
  </Box>
);
