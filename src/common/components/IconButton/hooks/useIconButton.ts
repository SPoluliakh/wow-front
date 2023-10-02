import { Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { TIconButtonVariant } from '../interfaces';

const commonStyle: SystemStyleObject<Theme> = {
  borderRadius: '4px',
  color: 'primary.c500',
};

const filled: SystemStyleObject<Theme> = {
  padding: '8px',
  backgroundColor: 'primary.c50',
  ['&.Mui-disabled']: {
    color: 'secondary.c400',
    backgroundColor: 'secondary.c100',
  },
  ['& .MuiSvgIcon-root']: { fontSize: '16px' },
};

const icon: SystemStyleObject<Theme> = {
  padding: '4px',
  backgroundColor: 'transparent',
  ['&.Mui-disabled']: {
    color: 'secondary.c400',
  },
  ['& .MuiSvgIcon-root']: { fontSize: '24px' },
};

const variantValue: Record<TIconButtonVariant, SystemStyleObject<Theme>> = {
  filled,
  icon,
};

export const useIconButton = (variant?: TIconButtonVariant) =>
  variant
    ? {
        ...commonStyle,
        ...variantValue[variant],
      }
    : {};
