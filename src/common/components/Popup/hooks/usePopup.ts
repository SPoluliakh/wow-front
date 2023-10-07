import { useState } from 'react';

export const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return { handleOpen, handleClose, isOpen };
};
