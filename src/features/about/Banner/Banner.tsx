import Image from 'next/image';
import { Box, Container } from '@mui/material';

export const Banner = () => {
  return (
    <Box
      sx={{
        pt: { xs: '134px', sm: 0 },
        pb: { xs: '54px', sm: '32px' },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: { xs: 'flex-start', sm: 'center' },
        }}
      >
        Bannnnneeerrrrr
      </Container>
    </Box>
  );
};
