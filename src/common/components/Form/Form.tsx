import { Box } from '@mui/material';
import { SxPropsInterface } from '@/common/interfaces/interfaces';
import { FormEvent } from 'react';

interface Props {
  handleSubmit: () => void;
  handleReset?: (e: FormEvent) => void;
  children: React.ReactNode;
  sx?: SxPropsInterface;
}

export const Form = ({ handleSubmit, handleReset, children, sx }: Props) => (
  <Box
    component="form"
    onSubmit={handleSubmit}
    onReset={handleReset}
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      ...sx,
    }}
  >
    {children}
  </Box>
);
