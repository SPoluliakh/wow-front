import { PaletteOptions } from '@mui/material';

export const palette: PaletteOptions = {
  primary: {
    main: '#000000',
    c900: '#1C3B77',
    c800: '#DDEDFF',
    c700: '#EDF1FF',
    c600: 'rgba(42, 67, 130, 0.70)',
    c500: 'rgba(0, 0, 0, 0.75)',
    c400: '#F4F4F4',
    c300: '#9C9C9C',
    c100: '#FFFFFF',
  },
  accent: {
    main: '#E30613',
    c900: '#E30613',
    c800: '#3963B4',
  },
  error: {
    main: '#FD2928',
    c900: '#FD2928',
    c800: '#DE4C4C',
  },
};

declare module '@mui/material/styles' {
  interface Palette {
    primary: PaletteColor;
    accent: AccentPalette;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    accent?: {
      main: string;
      c900: string;
      c800: string;
    };
  }

  interface PaletteColor {
    c900?: string;
    c800?: string;
    c700?: string;
    c600?: string;
    c500?: string;
    c400?: string;
    c300?: string;
    c200?: string;
    c100?: string;
  }
  interface SimplePaletteColorOptions {
    c900?: string;
    c800?: string;
    c700?: string;
    c600?: string;
    c500?: string;
    c400?: string;
    c300?: string;
    c200?: string;
    c100?: string;
  }

  interface AccentPalette {
    main: string;
    c900: string;
    c800: string;
  }
}
