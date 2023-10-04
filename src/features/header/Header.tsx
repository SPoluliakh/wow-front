import { Logo } from '@/common/components/Logo';
import { Box, Container } from '@mui/material';
import { HeaderBtn, NavItems } from './components';

export const Header = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.c800' }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo variant="desktop" />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavItems />
          <HeaderBtn />
        </Box>
      </Container>
    </Box>
  );
};
