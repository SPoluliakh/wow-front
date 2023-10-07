import React from 'react';
import { Theme } from '@mui/material';

export const setTypography = (theme: Theme) => {
  theme.typography = {
    ...theme.typography,
    h1: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '80px',
      lineHeight: '64px',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '56px',
      lineHeight: '48px',
      fontWeight: 300,
    },
    h3: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '32px',
      lineHeight: '32px',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 500,
    },
    p1: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    p2: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '24px',
      lineHeight: '24px',
      fontWeight: 300,
    },
    p3: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 600,
    },
    p4: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 400,
    },
    p5: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    p6: {
      fontFamily: 'var(--font-poppins)',
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: 300,
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
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
    p4?: React.CSSProperties;
    p5?: React.CSSProperties;
    p6?: React.CSSProperties;
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
  }
}
