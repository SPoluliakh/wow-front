import Image from 'next/image';
import { Box, Typography } from '@mui/material';

interface Props {
  width: number;
  height: number;
  src: string;
  title: string;
  text: string;
}

export const ServiceListItem = ({ width, height, src, title, text }: Props) => (
  <Box
    sx={{
      position: 'relative',
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: '12px',
      overflow: 'hidden',
      cursor: 'pointer',
    }}
  >
    <Image src={src} alt={title} width={width} height={height} />
    <Box
      sx={{
        position: 'absolute',
        top: '292px',
        left: 0,
        width: `${width}px`,
        height: `${height}px`,
        px: '20px',
        pt: '20px',
        backgroundColor: 'primary.c600',
        transition: 'top 300ms linear',

        '.MuiGrid-item:hover &, .MuiGrid-item:active &': {
          top: 0,
        },
      }}
    >
      <Typography
        variant="h5"
        component="h4"
        color="primary.c100"
        sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)', mb: '16px' }}
      >
        {title}
      </Typography>
      <Typography
        variant="p4"
        component="p"
        color="primary.c100"
        sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)' }}
      >
        {text}
      </Typography>
    </Box>
  </Box>
);
