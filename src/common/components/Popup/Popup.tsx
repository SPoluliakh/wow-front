import { ReactNode } from 'react';
import { Dialog, DialogTitle, Typography } from '@mui/material';
import { ButtonClose } from './components';

interface Props {
  children: ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
  subTitle: string;
}

export const Popup = ({ children, title, open, onClose, subTitle }: Props) => (
  <Dialog
    onClose={onClose}
    open={open}
    aria-labelledby="draggable-dialog-title"
    sx={{
      '& .MuiPaper-root': {
        width: { xs: '100%', sm: '480px' },
        height: { xs: '100%', sm: 'auto' },
        maxHeight: { xs: '100%' },
        m: 0,
        p: '40px 24px',
        backgroundColor: 'primary.c400',
        textAlign: 'center',
        backgroundImage: {
          xs: 'url("/images/popup/bubbles.png"),url("/images/popup/bubble.png")',
        },
        backgroundRepeat: 'no-repeat',
        backgroundSize: '222px 202px,181px 224px',
        backgroundPosition: 'top left,bottom right',
      },
    }}
  >
    <ButtonClose
      onClick={onClose}
      size={30}
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        color: 'primary.c900',
      }}
    />

    <DialogTitle
      variant={'h3'}
      component={'h3'}
      color={'primary.c900'}
      sx={{
        p: 0,
        textTransform: 'none',
        mb: '8px',
      }}
    >
      {title}
    </DialogTitle>
    <Typography component="p" variant="p4" sx={{ color: 'primary.c900' }}>
      {subTitle}
    </Typography>
    {children}
  </Dialog>
);
