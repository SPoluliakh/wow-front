import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useMedia } from '@/common/hooks';

interface Props {
  width: number;
  height: number;
  src: string;
  title: string;
  text: string;
}

export const ServiceListItem = ({ width, height, src, title, text }: Props) => {
  const { isSmUp } = useMedia();

  return (
    <Box
      sx={{
        position: 'relative',
        width: `100%`,
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
          top: { xs: '275px', sm: '246px', md: '292px' },
          left: 0,
          width: `100%`,
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
          variant={isSmUp ? 'h4' : 'p9'}
          component="h4"
          color="primary.c100"
          sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)', mb: '16px', fontWeight: 500 }}
        >
          {title}
        </Typography>
        <Typography
          variant="p5"
          component="p"
          color="primary.c100"
          sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)' }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};
