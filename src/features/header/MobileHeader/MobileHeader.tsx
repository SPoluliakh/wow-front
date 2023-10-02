import { Box, Container } from '@mui/material';

export const MobileHeader = () => {
  return (
    <Box sx={{ py: 2, backgroundColor: 'primary.c900' }}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        header
      </Container>
    </Box>
  );
};
