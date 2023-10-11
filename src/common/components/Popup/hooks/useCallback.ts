import emailjs from '@emailjs/browser';
import { SubmitActionsInterface, SubmitValuesInterface } from '../interfaces';

type CloseFuncType = () => void;

export const useCallback = (onClose: CloseFuncType, onOpen?: CloseFuncType) => {
  const onSubmit = (values: SubmitValuesInterface, actions?: SubmitActionsInterface) => {
    console.log('values::', values);

    const emailjsData = {
      name: values.name,
      phone: values.phone,
    };

    emailjs.send('service_7lhpgbr', 'template_gxqnnxn', emailjsData, 'zv91wjkH42llvOt-V').then(
      result => {
        console.log(result.text);
        if (actions) {
          actions.resetForm();
        }
        if (onOpen) {
          onOpen();
          return;
        }
        onClose();
      },
      error => {
        console.log(error.text);
      }
    );
  };

  return {
    onSubmit,
  };
};
