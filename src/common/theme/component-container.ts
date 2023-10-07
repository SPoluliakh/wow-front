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
            paddingLeft: 30,
            paddingRight: 30,
          },
          [theme.breakpoints.up('md')]: {
            maxWidth: 1440,
            paddingLeft: 130,
            paddingRight: 130,
          },
        },
      },
    },
  };
};
