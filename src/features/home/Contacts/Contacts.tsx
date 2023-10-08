'use client';
import { Box, Container } from '@mui/material';
import { useContacts } from './hooks';
import { CallBack, ContactsList, Map } from './components';

export const Contacts = () => {
  const contacts = useContacts();

  return (
    <Box id="contacts" sx={{ backgroundColor: 'primary.c800', py: '80px' }}>
      <Container>
        <ContactsList contacts={contacts} />
        <Map />
        <CallBack />
      </Container>
    </Box>
  );
};
