import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  width: number;
  height: number;
  Icon: FC;
  title: string;
  text: string;
}

export const ContactsListItem = ({ width, height, Icon, title, text }: Props) => {
  return (
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
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: '24px' }}>
        <Icon />
        <Typography variant="p3" component="h4" sx={{ ml: '16px' }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="p1" component="p">
        {text}
      </Typography>
    </Box>
  );
};
