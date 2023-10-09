import { Box, Typography } from '@mui/material';
import { useAboutData } from '../hooks';
import { IAboutData } from '../interfaces';
import { useMedia } from '@/common/hooks';

export const AboutText = () => {
  const { title, boldText, plainText }: IAboutData = useAboutData();
  const { isSmUp } = useMedia();

  return (
    <Box sx={{ px: { md: '100px' } }}>
      <Typography
        variant={isSmUp ? 'h4' : 'p9'}
        component="h2"
        color="primary.c900"
        sx={{ marginBottom: { xs: '20px', sm: '40px' }, textAlign: 'center' }}
      >
        {title}
      </Typography>

      <Typography
        variant={isSmUp ? 'p3' : 'p10'}
        component="p"
        color="primary.c900"
        sx={{
          marginBottom: { xs: '20px', md: '40px' },
          position: 'relative',
          zIndex: '5',
          textAlign: 'justify',
        }}
      >
        {boldText[0]}
        <Typography variant={isSmUp ? 'p4' : 'p5'} component="span" color="primary.c900">
          {plainText[0]}
        </Typography>
      </Typography>

      <Typography
        variant={isSmUp ? 'p4' : 'p5'}
        component="p"
        color="primary.c900"
        sx={{ position: 'relative', zIndex: '5', textAlign: 'justify' }}
      >
        {plainText[1]}

        <Typography variant={isSmUp ? 'p3' : 'p10'} component="span" color="primary.c900">
          {boldText[1]}
        </Typography>

        <Typography variant={isSmUp ? 'p4' : 'p5'} component="span" color="primary.c900">
          {plainText[2]}
        </Typography>

        <Typography variant={isSmUp ? 'p3' : 'p10'} component="span" color="primary.c900">
          {boldText[2]}
        </Typography>
      </Typography>
    </Box>
  );
};
