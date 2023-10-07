import { Box } from '@mui/material';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  handleSubmit: () => void;
  handleReset?: (e: any) => void;
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
