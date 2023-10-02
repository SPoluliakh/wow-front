import { useRouter } from 'next/navigation';
import { Box, Button, Container, Typography } from '@mui/material';

export const NotFound = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        height: { xs: '812px', sm: '924px' },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography>NotFound</Typography>
        <Button href="/" variant="contained" onClick={() => router.push('/')}>
          Home
        </Button>
      </Container>
    </Box>
  );
};
