import { useMediaQuery, useTheme } from '@mui/material';

export const useMedia = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  return {
    theme,
    isSmUp,
    isMdUp,
    isLgUp,
  };
};
