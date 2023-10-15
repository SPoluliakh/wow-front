import { Logo } from '@/common/components/Logo';
import { Box, Container } from '@mui/material';
import { HeaderBtn, NavItems } from './components';
import { useMedia } from '@/common/hooks';
import { useLogoSize } from './hooks/useLogoSize';

export const Header = () => {
  const { isSmUp } = useMedia();
  const variant = useLogoSize();

  return (
    <Box sx={{ backgroundColor: 'primary.c800' }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between', py: '4px' }}>
        <Logo variant={variant} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {isSmUp && <NavItems />}
          <HeaderBtn />
        </Box>
      </Container>
    </Box>
  );
};
