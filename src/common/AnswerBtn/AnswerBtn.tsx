import { Button } from '@mui/material';
import { BookSubmitValuesInterface, Popup, SubmitValuesInterface } from '../components/Popup';
import { usePopup } from '../components/Popup/hooks';
import { SxPropsInterface } from '@/common/interfaces/interfaces';
import { AnswerForm } from './components';

interface Props {
  variant: string;
  sx?: SxPropsInterface;
  values: SubmitValuesInterface | BookSubmitValuesInterface;
  close?: () => void;
}

export const AnswerBtn = ({ variant, sx, values, close }: Props) => {
  const { handleClose, handleOpen, isOpen } = usePopup();

  const handleClick = () => {
    console.log(values);

    handleOpen();

    close && close();
  };

  return (
    <>
      <Button onClick={handleClick} sx={{ ...sx }}>
        {variant}
      </Button>
      <Popup
        title="Thank You!"
        subTitle="Your contact details have been sent, expect a call back"
        open={isOpen}
        onClose={handleClose}
      >
        <AnswerForm onClose={handleClose} />
      </Popup>
    </>
  );
};
