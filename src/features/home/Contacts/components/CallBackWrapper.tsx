import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CallBackWrapper = ({ children }: Props) => (
  <Box
    sx={{
      backgroundColor: 'primary.c100',
      mt: { xs: '20px', sm: '30px', md: '80px' },
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
    {children}
  </Box>
);
