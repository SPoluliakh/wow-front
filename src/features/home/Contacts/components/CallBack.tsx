import { Typography } from '@mui/material';
import { CallbackForm } from '@/common/components/CallbackBtn/components';
import { Popup } from '@/common/components/Popup';
import { useCallback, usePopup } from '@/common/components/Popup/hooks';
import { AnswerForm } from '@/common/AnswerBtn/components';
import { useAnswer } from '@/common/hooks/useAnswer';
import { CallBackWrapper } from '.';

export const CallBack = () => {
  const { isAnswer, handleAnswerOpen, handleAnswerClose } = useAnswer();
  const { handleClose, handleOpen, isOpen } = usePopup(handleAnswerClose);
  const { onSubmit } = useCallback(handleAnswerOpen, handleOpen);

  return (
    <CallBackWrapper>
      <Typography variant={'h3'} component={'h3'}>
        Interested in our services?
      </Typography>
      <Typography component="p" variant="p4" sx={{ mb: '24px' }}>
        Enter your data and we will call you back
      </Typography>
      <CallbackForm numbers variant="REQUEST A CALLBACK" onSubmit={onSubmit} />
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
        <AnswerForm onClose={handleClose} />
      </Popup>
    </CallBackWrapper>
  );
};
