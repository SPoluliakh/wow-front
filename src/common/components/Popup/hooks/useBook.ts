import { BookSubmitValuesInterface, SubmitActionsInterface } from '../interfaces';

type CloseFuncType = () => void;

export const useBook = (onClose: CloseFuncType) => {
  const onSubmit = (values: BookSubmitValuesInterface, actions: SubmitActionsInterface) => {
    console.log('values::', values);
    actions.resetForm();

    onClose();
  };

  return {
    onSubmit,
  };
};
