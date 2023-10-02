import React from 'react';
import { Theme } from '@mui/material';

export const setTypography = (theme: Theme) => {
  theme.typography = {
    ...theme.typography,
    h1: {
      fontFamily: 'var(--font-roboto)',
      fontSize: '56px',
      lineHeight: '64px',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'var(--font-roboto)',
      fontSize: '40px',
      lineHeight: '48px',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'var(--font-roboto)',
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: 'var(--font-roboto)',
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
    },
    p1: {
      fontFamily: 'var(--font-roboto)',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    p2: {
      fontFamily: 'var(--font-roboto)',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    p3: {
      fontFamily: 'var(--font-roboto)',
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    p1eb: {
      fontFamily: 'var(--font-roboto)',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 800,
    },
  };
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
    p1eb: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
    p1eb: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p1: true;
    p2: true;
    p3: true;
    p1eb: true;
  }
}
