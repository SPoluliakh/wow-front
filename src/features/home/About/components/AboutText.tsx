import { Box, Typography } from '@mui/material';
import { useAboutData } from '../hooks';
import { IAboutData } from '../interfaces';
import { useMedia } from '@/common/hooks';

export const AboutText = () => {
  const data: IAboutData = useAboutData();
  const { isSmUp, isMdUp } = useMedia();

  return (
    <Box sx={{ px: isMdUp ? '100px' : 0 }}>
      <Typography
        variant="h4"
        component="h2"
        color="primary.c900"
        sx={{ marginBottom: isSmUp ? '40px' : '20px', textAlign: 'center' }}
      >
        {data.title}
      </Typography>

      <Typography
        variant="p3"
        component="p"
        color="primary.c900"
        sx={{ marginBottom: isMdUp ? '40px' : '20px', position: 'relative', zIndex: '5' }}
      >
        {data.boldText[0]}
        <Typography variant="p4" component="span" color="primary.c900">
          {data.plainText[0]}
        </Typography>
      </Typography>

      <Typography
        variant="p4"
        component="p"
        color="primary.c900"
        sx={{ position: 'relative', zIndex: '5' }}
      >
        {data.plainText[1]}

        <Typography variant="p3" component="span" color="primary.c900">
          {data.boldText[1]}
        </Typography>

        <Typography variant="p4" component="span" color="primary.c900">
          {data.plainText[2]}
        </Typography>

        <Typography variant="p3" component="span" color="primary.c900">
          {data.boldText[2]}
        </Typography>
      </Typography>
    </Box>
  );
};
