'use client';
import { Box, Container } from '@mui/material';
import { useContacts } from './hooks';
import { CallBack, ContactsList, Map } from './components';
import { useCallback } from '@/common/components/Popup/hooks';

export const Contacts = () => {
  const contacts = useContacts();
  const { onSubmit } = useCallback(() => {}); // /////////////////////

  return (
    <Box id="contacts" sx={{ backgroundColor: 'primary.c800', py: '80px' }}>
      <Container>
        <ContactsList contacts={contacts} />
        <Map />
        <CallBack onSubmit={onSubmit} />
      </Container>
    </Box>
  );
};
