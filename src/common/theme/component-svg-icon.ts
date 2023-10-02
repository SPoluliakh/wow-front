import { Theme } from '@mui/material';

export const setComponentSvgIcon = (theme: Theme) => {
  theme.components = {
    ...theme.components,
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.fontSize === 'small' && {
            fontSize: '16px',
          }),
          ...(ownerState.fontSize === 'medium' && {
            fontSize: '24px',
          }),
          ...(ownerState.fontSize === 'large' && {
            fontSize: '32px',
          }),
        }),
      },
    },
  };
};
