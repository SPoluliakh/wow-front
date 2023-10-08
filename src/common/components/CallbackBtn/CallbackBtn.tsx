import { Button } from '@mui/material';
import { CallbackForm } from './components';
import { Popup } from '../Popup';
import { useBook, useCallback, usePopup } from '../Popup/hooks';
import { SxPropsInterface } from '@/common/interfaces/interfaces';
import { BookEstimateForme } from './components/BookEstimateForme';
import { AnswerForm } from '@/common/AnswerBtn/components';
import { useAnswer } from '@/common/hooks/useAnswer';

interface Props {
  variant: string;
  sx?: SxPropsInterface;
}

export const CallbackBtn = ({ variant, sx }: Props) => {

  const { isAnswer, handleAnswerOpen, handleAnswerClose } = useAnswer();
  const { handleClose, handleOpen, isOpen } = usePopup(handleAnswerClose);
  const { onSubmit } = useCallback(handleAnswerOpen);
  const { onSubmit: handleSubmit } = useBook(handleAnswerOpen);

  return (
    <>
      <Button onClick={handleOpen} sx={{ ...sx }}>
        {variant}
      </Button>
      <Popup
        title={!isAnswer ? 'Interested in our services?' : '"Thank You!"'}
        subTitle={
          !isAnswer
            ? 'Enter your data and we will call you'
            : 'Your contact details have been sent, expect a call back'
        }
        open={isOpen}
        onClose={handleClose}
      >
        {variant === 'REQUEST A CALLBACK'
          ? !isAnswer && <CallbackForm onSubmit={onSubmit} variant={variant} />
          : !isAnswer && <BookEstimateForme onSubmit={handleSubmit} variant={variant} />}
        {isAnswer && <AnswerForm onClose={handleClose} />}
      </Popup>
    </>
  );
};
