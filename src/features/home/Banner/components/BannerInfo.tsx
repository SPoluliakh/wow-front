import { CallbackBtn } from '@/common/components/CallbackBtn';
import { Logo } from '@/common/components/Logo';
import { useMedia } from '@/common/hooks';
import { Box, List, ListItem, Typography } from '@mui/material';

export const BannerInfo = () => {
  const { isSmUp } = useMedia();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: '32px', sm: '40px', md: '32px' },
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: { xs: '8px', sm: '56px', md: '24px' } }}
      >
        <Logo variant={isSmUp ? 'banner' : 'bannerMobile'} />
        <Box>
          <Typography component="h1" variant="h1" color="primary.c900">
            WOW!
          </Typography>
          <Typography component="h2" variant="h2" color="accent.c900">
            CLEAN & SHINE
          </Typography>
        </Box>
      </Box>
      <List
        sx={{
          m: 0,
          p: 0,
          display: 'flex',
          gap: '24px',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <ListItem sx={{ p: 0 }}>
          <CallbackBtn variant="REQUEST A CALLBACK" />
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <CallbackBtn
            variant="BOOK A FREE ESTIMATE"
            sx={{ backgroundColor: 'primary.c100', color: 'primary.c900' }}
          />
        </ListItem>
      </List>
    </Box>
  );
};
