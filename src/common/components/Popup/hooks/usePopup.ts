import { useState } from 'react';

export const usePopup = (handleAnswerClose?: () => void) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    handleAnswerClose && handleAnswerClose();
  };

  return { handleOpen, handleClose, isOpen };
};
