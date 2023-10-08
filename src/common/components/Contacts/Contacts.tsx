import { Box, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MailOutline from '@mui/icons-material/MailOutline';
import { useMedia } from '@/common/hooks';

export const Contacts = () => {
  const { isSmUp } = useMedia();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: { xs: '16px', sm: '24px', md: '40px' },
        flexDirection: { xs: 'column-reverse', sm: 'column', md: 'row' },
      }}
    >
      <Box
        color="primary.c900"
        sx={{
          display: 'flex',
          gap: isSmUp ? '8px' : '24px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
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
        color="primary.c900"
        sx={{
          display: 'flex',
          gap: isSmUp ? '8px' : '24px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CallIcon />
        <Typography
          variant="p5"
          component="a"
          color="primary.c900"
          href="tel:8036341263"
          sx={{ mr: isSmUp ? '16px' : 0 }}
        >
          (803)634-1263
        </Typography>

        <Typography variant="p5" component="a" color="primary.c900" href="tel:8035072505">
          (803)507-2505
        </Typography>
      </Box>
    </Box>
  );
};
