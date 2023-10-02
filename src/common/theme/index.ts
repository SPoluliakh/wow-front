import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { breakpoints } from './breakpoints';
import { setTypography } from './typography';
import { setComponentContainer } from './component-container';
import { setComponentButton } from './component-button';
import { setComponentSvgIcon } from './component-svg-icon';

export const theme = createTheme({
  breakpoints,
  palette,
});

setTypography(theme);
setComponentContainer(theme);
setComponentButton(theme);
setComponentSvgIcon(theme);
