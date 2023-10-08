import { CallbackForm } from '@/common/components/CallbackBtn/components';
import { SubmitInterface } from '@/common/components/Popup';
import { Box, Typography } from '@mui/material';

interface Props {
  onSubmit: SubmitInterface;
}

export const CallBack = ({ onSubmit }: Props) => (
  <Box
    sx={{
      backgroundColor: 'primary.c100',
      mt: '80px',
      p: '40px 24px',
      borderRadius: '12px',
      border: '2px solid #1C3B77',
      textAlign: 'center',
      color: 'primary.c900',
      backgroundImage: {
        xs: 'url("/images/popup/bubbles.png"),url("/images/popup/bubble.png")',
      },
      backgroundRepeat: 'no-repeat',
      backgroundSize: '242px 202px,181px 224px',
      backgroundPosition: 'top left,bottom right',
    }}
  >
    <Typography variant={'h3'} component={'h3'}>
      Interested in our services?
    </Typography>
    <Typography component="p" variant="p4" sx={{ mb: '24px' }}>
      Enter your data and we will call you back
    </Typography>
    <CallbackForm numbers variant="REQUEST A CALLBACK" onSubmit={onSubmit} />
  </Box>
);
