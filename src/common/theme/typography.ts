import React from 'react';
import { Theme } from '@mui/material';

export const setTypography = (theme: Theme) => {
  theme.typography = {
    ...theme.typography,
    h1: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '40px',
      lineHeight: 1.5,
      fontWeight: 700,
      [theme.breakpoints.up('sm')]: {
        fontSize: '80px',
      },
    },
    h2: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '32px',
      lineHeight: 1.5,
      fontWeight: 300,
      [theme.breakpoints.up('sm')]: {
        fontSize: '56px',
      },
    },
    h3: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '20px',
      lineHeight: 1.2,
      fontWeight: 700,
      [theme.breakpoints.up('sm')]: {
        fontSize: '32px',
      },
    },
    h4: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '20px',
      lineHeight: 1.5,
      fontWeight: 600,
      [theme.breakpoints.up('sm')]: {
        fontSize: '24px',
      },
    },
    h5: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '20px',
      lineHeight: 1.5,
      fontWeight: 500,
      [theme.breakpoints.up('sm')]: {
        fontSize: '24px',
      },
    },

    p1: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '16px',
      lineHeight: 1.2,
      fontWeight: 400,
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
      },
    },
    p2: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '16px',
      lineHeight: 1,
      fontWeight: 300,
      [theme.breakpoints.up('sm')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
      },
    },
    p3: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '16px',
      lineHeight: 1.5,
      fontWeight: 600,
      [theme.breakpoints.up('sm')]: {
        fontSize: '24px',
      },
    },
    p4: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '16px',
      lineHeight: 1.5,
      fontWeight: 400,
      [theme.breakpoints.up('sm')]: {
        fontSize: '24px',
      },
    },
    p5: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '16px',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    p6: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '20px',
      lineHeight: 1.5,
      fontWeight: 600,
      [theme.breakpoints.up('sm')]: {
        fontSize: '24px',
      },
    },
    p7: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '18px',
      lineHeight: 1.2,
      fontWeight: 400,
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
      },
    },
    p8: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '12px',
      lineHeight: 1.5,
      fontWeight: 400,
    },
  };
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
    p4: React.CSSProperties;
    p5: React.CSSProperties;
    p6: React.CSSProperties;
    p7: React.CSSProperties;
    p8: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
    p4?: React.CSSProperties;
    p5?: React.CSSProperties;
    p6?: React.CSSProperties;
    p7?: React.CSSProperties;
    p8?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p1: true;
    p2: true;
    p3: true;
    p4: true;
    p5: true;
    p6: true;
    p7: true;
    p8: true;
  }
}
