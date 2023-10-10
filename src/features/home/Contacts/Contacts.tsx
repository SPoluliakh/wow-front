'use client';
import { Box, Container, Typography } from '@mui/material';
import { useContacts } from './hooks';
import { CallBack, ContactsList, Map } from './components';

export const Contacts = () => {
  const contacts = useContacts();

  return (
    <Box
      id="contacts"
      sx={{ backgroundColor: 'primary.c800', py: { xs: '20px', sm: '64px', md: '80px' } }}
    >
      <Container>
        <Typography
          component="h2"
          variant="h4"
          color="primary.c900"
          sx={{ textAlign: 'center', mb: { xs: '20px', sm: '40px' } }}
        >
          CONTACTS
        </Typography>
        <ContactsList contacts={contacts} />
        <Map />
        <CallBack />
      </Container>
    </Box>
  );
};
