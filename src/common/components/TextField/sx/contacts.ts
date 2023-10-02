import { CSSSelectorObjectOrCssVariables } from '@mui/system';
import { Theme } from '@mui/material';

export const contacts: CSSSelectorObjectOrCssVariables<Theme> = {
  fontFamily: 'var(--font-montserrat)',
  width: '100%',
  lineHeight: '24px',
  py: '24px',
  '& fieldset span': { display: 'none' },

  '&.required .MuiInputLabel-root::after': {
    content: '"*"',
    color: 'error.c900',
  },
  '& .MuiInputLabel-root': {
    position: 'absolute',
    transform: 'none',
    color: 'primary.c900',
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    fontSize: '14px',

    '&.Mui-disabled': {
      color: 'primary.c100',
    },

    [`&.Mui-error,
    &.Mui-focused.Mui-error,
    &.MuiFormLabel-filled.Mui-error`]: {
      color: 'error.c900',
      '&.Mui-disabled': {
        color: 'primary.c100',
      },
    },
  },

  '& .MuiOutlinedInput-root': {
    p: 0,
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    fontSize: '16px',
    borderColor: 'primary.c300',

    '& fieldset': {
      display: 'none',
    },
    '&.Mui-focused .MuiInputBase-input': {
      backgroundColor: 'secondary.c50',
      borderColor: 'primary.c700',
    },
    [`&.Mui-error.Mui-focused .MuiInputBase-input,
      &.Mui-error .MuiInputBase-input`]: {
      borderColor: 'error.c900',
    },
    '&.Mui-disabled .MuiInputBase-input': {
      borderColor: 'primary.c100',
      '&::placeholder': { opacity: 0 },
    },
    '& .MuiInputBase-input': {
      height: 'auto',
      py: '11px',
      pl: '16px',
      pr: '48px',
      fontSize: { xs: '16px', sm: '18px' },
      color: 'secondary.c900',
      backgroundColor: 'secondary.c50',
      borderColor: 'primary.c500',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: '8px',
      '&::placeholder': { color: 'secondary.c500', opacity: '1' },
    },
    '& .MuiInputBase-inputMultiline': {
      px: '16px',
    },
    '& .MuiInputAdornment-positionEnd': {
      position: 'absolute',
      right: '16px',
    },
  },

  '& .MuiFormHelperText-root.Mui-error': {
    position: 'absolute',
    bottom: 0,
    mt: 0,
    ml: 0,
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&.Mui-disabled': {
      display: 'none',
    },
  },
};
