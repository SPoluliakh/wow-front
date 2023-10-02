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
            maxWidth: 992,
            paddingLeft: 24,
            paddingRight: 24,
          },
          [theme.breakpoints.up('md')]: {
            maxWidth: 1200,
            paddingLeft: 40,
            paddingRight: 40,
          },
          [theme.breakpoints.up('lg')]: {
            maxWidth: 1440,
            paddingLeft: 60,
            paddingRight: 60,
          },
          [theme.breakpoints.up('xl')]: {
            maxWidth: 1440,
            paddingLeft: 60,
            paddingRight: 60,
          },
        },
      },
    },
  };
};
