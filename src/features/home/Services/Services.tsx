'use client';
import { Box, Container, Typography } from '@mui/material';
import { ServiceList } from './components';
import { useServices } from './hooks';

export const Services = () => {
  const services = useServices();

  return (
    <Box
      id="services"
      sx={{ py: { xs: '20px', sm: '64px', md: '80px' }, backgroundColor: 'primary.c700' }}
    >
      <Container>
        <Typography
          component="h2"
          variant="h4"
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
