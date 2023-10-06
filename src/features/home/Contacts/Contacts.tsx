'use client';
import { Box, Container, Typography } from '@mui/material';
import { useContacts } from './hooks';
import { ContactsList } from './components';

export const Contacts = () => {
  const contacts = useContacts();

  return (
    <Box sx={{ backgroundColor: 'primary.c800', py: '80px' }}>
      <Container>
        <ContactsList contacts={contacts} />
      </Container>
    </Box>
  );
};
