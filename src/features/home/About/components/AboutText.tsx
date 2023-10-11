import { Box, Typography } from '@mui/material';
import { useAboutData } from '../hooks';
import { IAboutData } from '../interfaces';

export const AboutText = () => {
  const { title, boldText, plainText }: IAboutData = useAboutData();

  return (
    <Box sx={{ px: { md: '100px' } }}>
      <Typography
        variant="h4"
        component="h2"
        color="primary.c900"
        sx={{ marginBottom: { xs: '20px', sm: '40px' }, textAlign: 'center' }}
      >
        {title}
      </Typography>

      <Typography
        variant="p3"
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
        <Typography variant="p4" component="span" color="primary.c900">
          {plainText[0]}
        </Typography>
      </Typography>

      <Typography
        variant="p4"
        component="p"
        color="primary.c900"
        sx={{ position: 'relative', zIndex: '5', textAlign: 'justify' }}
      >
        {plainText[1]}

        <Typography variant="p3" component="span" color="primary.c900">
          {boldText[1]}
        </Typography>

        <Typography variant="p4" component="span" color="primary.c900">
          {plainText[2]}
        </Typography>

        <Typography variant="p3" component="span" color="primary.c900">
          {boldText[2]}
        </Typography>
      </Typography>
    </Box>
  );
};
