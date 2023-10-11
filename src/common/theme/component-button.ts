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
          fontFamily: 'var(--font-poppins)',
          fontWeight: 400,
          lineHeight: 1.5,
          textTransform: 'none',
          borderStyle: 'solid',
          borderRadius: '8px',
          borderWidth: '2px',
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '16px',
          paddingRight: '16px',
          fontSize: '16px',

          ...(ownerState.size === 'medium' &&
            ownerState.variant === 'text' && {
              [theme.breakpoints.up('xs')]: {
                minHeight: '32px',
                minWidth: '56px',
                width: 'fill-available',
              },
            }),
          ...(ownerState.size === 'medium' &&
            ownerState.variant === 'contained' && {
              [theme.breakpoints.up('xs')]: {
                minHeight: '32px',
                minWidth: '56px',
              },
              [theme.breakpoints.down('sm')]: {
                width: '100%',
              },
            }),
          ...(ownerState.size === 'medium' &&
            ownerState.variant === 'text' && {
              [theme.breakpoints.up('sm')]: {
                minHeight: '48px',
                minWidth: '64px',
                fontSize: '20px',
                width: 'max-content',
              },
            }),
          ...(ownerState.size === 'medium' &&
            ownerState.variant === 'contained' && {
              [theme.breakpoints.up('sm')]: {
                minHeight: '48px',
                minWidth: '64px',
              },
              [theme.breakpoints.down('md')]: {
                width: '100%',
              },
            }),

          ['& .MuiButton-endIcon']: { marginRight: 0 },
          ['& .MuiButton-startIcon']: { marginLeft: 0 },
          ['& .MuiSvgIcon-root']: { fontSize: '16px' },

          ...(ownerState.variant === 'contained' && { boxShadow: 'none' }),

          ...{
            backgroundColor: palette.primary.c900,
            borderColor: palette.primary.c900,
            color: palette.primary.c100,
            ['&:focus']: { borderColor: palette.accent.c800 },
            ['&:hover']: {
              backgroundColor: palette.accent.c800,
              borderColor: palette.accent.c800,
              color: palette.primary.c100,
              boxShadow: 'none',
            },
            ['&:active']: {
              backgroundColor: palette.accent.c800,
              borderColor: palette.accent.c800,
              color: palette.primary.c100,
              boxShadow: 'none',
              scale: '0.99',
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
