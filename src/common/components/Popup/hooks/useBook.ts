import emailjs from '@emailjs/browser';
import { BookSubmitValuesInterface, SubmitActionsInterface } from '../interfaces';

type CloseFuncType = () => void;

export const useBook = (onClose: CloseFuncType) => {
  const onSubmit = (values: BookSubmitValuesInterface, actions: SubmitActionsInterface) => {
    console.log('values::', values);

    const emailjsData = {
      name: values.name,
      phone: values.phone,
      date: values.date,
      time: values.time,
      location: values.location,
    };

    emailjs.send('service_7lhpgbr', 'template_8hykbfc', emailjsData, 'zv91wjkH42llvOt-V').then(
      result => {
        console.log(result.text);
        actions.resetForm();
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
