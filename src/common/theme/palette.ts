import { PaletteOptions } from '@mui/material';

export const palette: PaletteOptions = {
  primary: {
    main: '#000000',
    c900: '#000000',
    c800: '#111111',
    c700: '#1C1C1C',
    c600: '#505050',
    c500: '#646464',
    c400: '#8B8B8B',
    c300: '#B6B6B6',
    c200: '#E0E0E0',
    c100: '#FFFFFF',
  },
  accent: {
    main: '#F4D21F',
    c900: '#F4D21F',
    c800: '#CBB338',
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
