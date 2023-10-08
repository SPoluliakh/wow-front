import { Button } from '@mui/material';

interface Props {
  onClose: () => void;
}

export const AnswerForm = ({ onClose }: Props) => (
  <Button onClick={onClose} type="button" sx={{ m: '0 auto' }}>
    GO TO HOMEPAGE
  </Button>
);
