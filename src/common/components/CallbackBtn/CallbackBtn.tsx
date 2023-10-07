import { Button } from '@mui/material';
import { CallbackForm } from './components';
import { Popup } from '../Popup';
import { useBook, useCallback, usePopup } from '../Popup/hooks';
import { SxPropsInterface } from '@/common/interfaces/interfaces';
import { BookEstimateForme } from './components/BookEstimateForme';

interface Props {
  variant: string;
  sx?: SxPropsInterface;
}

export const CallbackBtn = ({ variant, sx }: Props) => {
  const { handleClose, handleOpen, isOpen } = usePopup();
  const { onSubmit } = useCallback(handleClose);
  const { onSubmit: handleSubmit } = useBook(handleClose);

  return (
    <>
      <Button onClick={handleOpen} sx={{ ...sx }}>
        {variant}
      </Button>
      <Popup title="Interested in our services?" open={isOpen} onClose={handleClose}>
        {variant === 'REQUEST A CALLBACK' ? (
          <CallbackForm onSubmit={onSubmit} variant={variant} />
        ) : (
          <BookEstimateForme onSubmit={handleSubmit} variant={variant} />
        )}
      </Popup>
    </>
  );
};
