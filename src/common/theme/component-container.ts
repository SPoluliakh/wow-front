import { Theme } from '@mui/material';

export const setComponentContainer = (theme: Theme) => {
  theme.components = {
    ...theme.components,
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: 360,
          paddingLeft: 16,
          paddingRight: 16,
          [theme.breakpoints.up('sm')]: {
            maxWidth: 768,
            paddingLeft: 24,
            paddingRight: 24,
          },
          [theme.breakpoints.up('md')]: {
            maxWidth: 1400,
            paddingLeft: 40,
            paddingRight: 40,
          },
        },
      },
    },
  };
};
