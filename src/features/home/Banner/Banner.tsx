import { Box, Container, List } from '@mui/material';
import { useValuation } from './hooks';
import { BannerInfo, BannerValuation } from './components';
import { Contacts } from '@/common/components';
import { useMedia } from '@/common/hooks';

export const Banner = () => {
  const valuation = useValuation();
  const { isSmUp } = useMedia();

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        backgroundImage: {
          xs: 'url("/images/banner/desktop.png")',
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: {
          xs: 'center top',
        },
        backgroundSize: {
          xs: '100vw 1080px',
        },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: '46px', sm: '42px', md: '162px' },
          pb: { xs: '46px', sm: '42px', md: '135px' },
          width: '100%',
          height: '100%',
          backgroundImage: {
            xs: 'url("/images/banner/bubbles.png")',
          },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: {
            xs: 'top 0 left 80px',
          },
          backgroundSize: {
            xs: '181px 224px',
          },
        }}
      >
        <BannerInfo />
        <List
          sx={{
            display: 'flex',
            gap: { xs: '16px', sm: '80px' },
            borderTop: '1px solid #B9D1FF',
            mt: { xs: '32px', sm: '64px', md: '80px' },
            mb: { xs: '40px', sm: 0 },
            pt: { xs: '16px', sm: '24px' },
            pb: 0,
            px: { xs: '14px', sm: 0 },
          }}
        >
          {valuation.map(({ id, text }) => (
            <BannerValuation text={text} key={id} />
          ))}
        </List>
        {!isSmUp && <Contacts />}
      </Container>
    </Box>
  );
};
