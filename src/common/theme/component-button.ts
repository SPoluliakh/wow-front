import { Theme } from '@mui/material';

export const setComponentButton = (theme: Theme) => {
  const { palette } = theme;

  theme.components = {
    ...theme.components,
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontFamily: 'var(--font-roboto)',
          fontWeight: 400,
          lineHeight: '24px',
          textTransform: 'none',
          borderStyle: 'solid',
          borderRadius: '4px',
          borderWidth: '2px',
          padding: '12px 24px',
          fontSize: '16px',

          ...(ownerState.size === 'medium' &&
            ownerState.variant === 'text' && {
              [theme.breakpoints.up('xs')]: {
                height: '40px',
                width: '140px',
              },
            }),
          ...(ownerState.size === 'medium' &&
            ownerState.variant === 'contained' && {
              [theme.breakpoints.up('xs')]: {
                height: '48px',
                width: '308px',
              },
              [theme.breakpoints.down('sm')]: {
                width: '100%',
              },
            }),

          ['& .MuiButton-endIcon']: { marginRight: 0 },
          ['& .MuiButton-startIcon']: { marginLeft: 0 },
          ['& .MuiSvgIcon-root']: { fontSize: '16px' },

          ...(ownerState.variant === 'contained' && { boxShadow: 'none' }),

          ...{
            backgroundColor: palette.accent.c900,
            borderColor: palette.accent.c900,
            color: palette.primary.c900,
            ['&:focus']: { borderColor: palette.primary.c800 },
            ['&:hover']: {
              backgroundColor: palette.accent.c800,
              borderColor: palette.accent.c800,
              boxShadow: 'none',
            },
            ['&:active']: {
              backgroundColor: palette.accent.c800,
              borderColor: palette.accent.c800,
              boxShadow: 'none',
            },
            ['&.Mui-disabled']: {
              color: palette.primary.c500,
              backgroundColor: palette.primary.c100,
              borderColor: palette.primary.c100,
            },
          },
        }),
      },
    },
  };
};
