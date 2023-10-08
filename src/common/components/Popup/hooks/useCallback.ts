import { SubmitActionsInterface, SubmitValuesInterface } from '../interfaces';

type CloseFuncType = () => void;

export const useCallback = (onClose: CloseFuncType, onOpen?: CloseFuncType) => {
  const onSubmit = (values: SubmitValuesInterface, actions?: SubmitActionsInterface) => {
    console.log('values::', values);
    if (actions) {
      actions.resetForm();
    }
    if (onOpen) {
      onOpen();
      return;
    }
    onClose();
  };

  return {
    onSubmit,
  };
};
