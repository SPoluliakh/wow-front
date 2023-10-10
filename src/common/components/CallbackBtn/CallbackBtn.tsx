import { Button, Typography } from '@mui/material';
import { CallbackForm } from './components';
import { Popup } from '../Popup';
import { useBook, useCallback, usePopup } from '../Popup/hooks';
import { SxPropsInterface } from '@/common/interfaces/interfaces';
import { BookEstimateForme } from './components/BookEstimateForme';
import { AnswerForm } from '@/common/AnswerBtn/components';
import { useAnswer } from '@/common/hooks/useAnswer';
import { ReactNode } from 'react';
// import { useMedia } from '@/common/hooks';

interface Props {
  variant: string;
  sx?: SxPropsInterface;
  icon?: ReactNode;
}

export const CallbackBtn = ({ variant, sx, icon }: Props) => {
  const { isAnswer, handleAnswerOpen, handleAnswerClose } = useAnswer();
  const { handleClose, handleOpen, isOpen } = usePopup(handleAnswerClose);
  const { onSubmit } = useCallback(handleAnswerOpen);
  const { onSubmit: handleSubmit } = useBook(handleAnswerOpen);
  // const { isSmUp } = useMedia();

  return (
    <>
      <Button onClick={handleOpen} sx={{ ...sx, letterSpacing: 0 }}>
        {/* <Typography component="span" variant={isSmUp ? 'p1' : 'p5'}> */}
        {icon ?? variant}
        {/* </Typography> */}
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
