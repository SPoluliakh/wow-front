import { Box, Container, List } from '@mui/material';
import { useValuation } from './hooks';
import { BannerInfo, BannerValuation } from './components';

export const Banner = () => {
  const valuation = useValuation();

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '680px' },
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
          pt: '170px',
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
            width: '561px',
            justifyContent: 'space-between',
            borderTop: '1px solid #B9D1FF',
            mt: '120px',
          }}
        >
          {valuation.map(({ id, text }) => (
            <BannerValuation text={text} key={id} />
          ))}
        </List>
      </Container>
    </Box>
  );
};
