import { useMediaQuery } from '@mui/material';

export const useMedia = () => {
  const isMobile = useMediaQuery('(max-width:500px)');
  const isSmollMobile = useMediaQuery('(max-width:420px)');

  const getFormWidth = () => {
    if (isSmollMobile) return '300px';
    if (isMobile) return '340px';

    return '400px';
  };

  return {
    isMobile,
    isSmollMobile,
    getFormWidth,
  };
};
