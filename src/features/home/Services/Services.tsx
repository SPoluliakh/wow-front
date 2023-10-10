'use client';
import { Box, Container, Typography } from '@mui/material';
import { ServiceList } from './components';
import { useServices } from './hooks';
import { useMedia } from '@/common/hooks';

export const Services = () => {
  const services = useServices();
  const { isSmUp } = useMedia();

  return (
    <Box
      id="services"
      sx={{ py: { xs: '20px', sm: '64px', md: '80px' }, backgroundColor: 'primary.c700' }}
    >
      <Container>
        <Typography
          component="h2"
          variant={isSmUp ? 'h4' : 'p9'}
          color="primary.c900"
          sx={{ textAlign: 'center', mb: { xs: '20px', sm: '40px' } }}
        >
          FEATURED SERVICES
        </Typography>
        <ServiceList services={services} />
      </Container>
    </Box>
  );
};
