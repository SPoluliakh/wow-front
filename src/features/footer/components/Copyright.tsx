import { Box, Typography } from '@mui/material';

export const Copyright = () => {
  return (
    <Box>
      <Typography
        variant="p5"
        component="p"
        color="primary.c900"
        sx={{ textAlign: 'center', mb: '4px' }}
      >
        &copy; WOW! Clean and shine 2023. All rights reserved.
      </Typography>
      <Typography
        variant="p8"
        component="p"
        color="primary.c900"
        sx={{ opacity: '0.9', textAlign: 'center' }}
      >
        Developed by Serhii Poluliakh, Oleksandr Perlov and Artur Yushkov
      </Typography>
    </Box>
  );
};
