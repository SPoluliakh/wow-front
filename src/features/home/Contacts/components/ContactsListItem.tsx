import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { useHref } from '../hooks';

interface Props {
  width: number;
  height: number;
  icon: ReactElement;
  title: string;
  text: string;
}

export const ContactsListItem = ({ width, height, icon, title, text }: Props) => {
  const href = useHref(title);
  return (
    <Box component="a" href={href} target="_blank">
      <Box
        sx={{
          width: `${width}px`,
          height: `${height}px`,
          border: '2px solid #1C3B77',
          borderRadius: '12px',
          overflow: 'hidden',
          cursor: 'pointer',
          backgroundColor: 'primary.c100',
          p: '24px',
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
            mb: '24px',
            '& .MuiSvgIcon-root': {
              width: '32px',
              height: '32px',
            },
          }}
        >
          {icon}

          <Typography variant="p3" component="h4" sx={{ ml: '16px' }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="p1" component="p">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};
