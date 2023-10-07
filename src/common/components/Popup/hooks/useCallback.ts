import { SubmitActionsInterface, SubmitValuesInterface } from '../interfaces';

type CloseFuncType = () => void;

export const useCallback = (onClose: CloseFuncType) => {
  const onSubmit = (values: SubmitValuesInterface, actions: SubmitActionsInterface) => {
    console.log('values::', values);
    actions.resetForm();

    onClose();
  };

  return {
    onSubmit,
  };
};
