import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useMedia } from '@/common/hooks';

interface Props {
  width: number;
  height: number;
  src: { desk: string; mob: string };
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
      <Image src={isSmUp ? src.desk : src.mob} alt={title} width={width} height={height} />
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '225px', sm: '267px', md: '300px' },
          left: 0,
          width: `100%`,
          height: '440px',
          px: '20px',
          pt: '20px',
          backgroundColor: 'primary.c600',
          transition: 'top 300ms linear',

          '.MuiGrid-item:hover &, .MuiGrid-item:active &': {
            top: { xs: -47, sm: 0 },
          },
        }}
      >
        <Typography
          variant="h5"
          component="h4"
          color="primary.c100"
          sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)', mb: '8px' }}
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
