import { IconButton as MUIIconButton, IconButtonProps } from '@mui/material';
import { useIconButton } from './hooks';
import { TIconButtonVariant } from './interfaces';

interface ExtProps {
  href?: string;
  variant?: TIconButtonVariant;
}

export const IconButton = ({
  variant,
  sx,
  children,
  ...otherProps
}: IconButtonProps & ExtProps) => {
  const style = useIconButton(variant);
  return (
    <MUIIconButton
      {...otherProps}
      sx={{
        ...style,
        ...sx,
      }}
    >
      {children}
    </MUIIconButton>
  );
};
