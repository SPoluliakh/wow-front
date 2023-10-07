import { CSSSelectorObjectOrCssVariables } from '@mui/system';
import { Theme } from '@mui/material';

export const contacts: CSSSelectorObjectOrCssVariables<Theme> = {
  fontFamily: 'var(--font-poppins)',
  width: '400px',
  m: '0 auto',
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
      backgroundColor: 'primary.c100',
      borderColor: 'primary.c300',
    },
    [`&.Mui-error.Mui-focused .MuiInputBase-input,
      &.Mui-error .MuiInputBase-input`]: {
      borderColor: 'error.c900',
    },
    '&.Mui-disabled .MuiInputBase-input': {
      borderColor: 'primary.c100',
      '&::placeholder': { opacity: 0, color: 'primary.c300' },
    },
    '& .MuiInputBase-input': {
      height: 'auto',
      py: '11px',
      pl: '16px',
      pr: '48px',
      fontSize: { xs: '16px', sm: '18px' },
      color: 'primary.c900',
      backgroundColor: 'primary.c100',
      borderColor: 'primary.c300',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: '12px',
      '&::placeholder': { color: 'primary.c300', opacity: '1' },
    },
    '& .MuiInputBase-inputMultiline': {
      px: '16px',
    },
    '& .MuiInputAdornment-positionEnd': {
      position: 'absolute',
      right: '16px',
      color: 'primary.c900',
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
