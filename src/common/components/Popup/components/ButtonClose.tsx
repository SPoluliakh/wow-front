import { IconButton } from '@mui/material';
import { Close } from '@/common/icons/Close';
import { SxPropsInterface } from '@/common/interfaces/interfaces';

interface Props {
  onClick(event: React.KeyboardEvent | React.MouseEvent): void;
  size?: number;
  color?: string;
  sx?: SxPropsInterface;
}

export const ButtonClose = ({ onClick, sx, size }: Props) => (
  <IconButton aria-label="close" onClick={onClick} sx={sx}>
    <Close size={size} />
  </IconButton>
);
