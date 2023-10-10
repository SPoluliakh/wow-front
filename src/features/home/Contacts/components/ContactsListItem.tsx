import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { useHref } from '../hooks';
import { useMedia } from '@/common/hooks';

interface Props {
  icon: ReactElement;
  title: string;
  text: string;
}

export const ContactsListItem = ({ icon, title, text }: Props) => {
  const href = useHref(title);
  const { isSmUp, isMdUp } = useMedia();

  return (
    <Box component="a" href={href} target="_blank">
      <Box
        sx={{
          height: { xs: '120px', sm: '152px' },
          border: '2px solid #1C3B77',
          borderRadius: '12px',
          overflow: 'hidden',
          cursor: 'pointer',
          backgroundColor: 'primary.c100',
          py: { xs: '20px', sm: '24px' },
          px: { xs: '16px', md: '24px' },
          color: 'primary.c900',

          '.css-85kwfl-MuiGrid-root:hover &': {
            borderWidth: '3px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: { xs: '16px', sm: '24px' },
            '& .MuiSvgIcon-root': {
              width: '32px',
              height: '32px',
            },
          }}
        >
          {icon}

          <Typography variant={isSmUp ? 'p3' : 'p9'} component="h4" sx={{ ml: '16px' }}>
            {title}
          </Typography>
        </Box>
        <Typography variant={isMdUp ? 'p1' : 'p11'} component="p">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};
