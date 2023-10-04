import { Box } from '@mui/material';
import { useMedia } from '@/common/hooks';

export const BgBubbles = () => {
  const { isSmUp, isMdUp } = useMedia();

  return (
    <>
      <Box
        sx={{
          width: '312px',
          height: '300px',
          backgroundImage: {
            xs: 'url("/images/about/bubbles-up.svg")',
          },
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: !isSmUp ? '32px' : isMdUp ? 0 : '-80px',
          left: !isSmUp ? '16px' : isMdUp ? '74px' : '-36px',
          zIndex: '0',
        }}
      ></Box>
      {isSmUp && (
        <Box
          sx={{
            width: '416px',
            height: '330px',
            backgroundImage: {
              xs: 'url("/images/about/bubbles-down.svg")',
            },
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            bottom: isMdUp ? '24px' : '-150px',
            right: isMdUp ? '20px' : '-120px',
            zIndex: '0',
          }}
        ></Box>
      )}
    </>
  );
};
