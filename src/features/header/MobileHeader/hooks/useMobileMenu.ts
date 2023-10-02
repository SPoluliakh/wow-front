import { useState } from 'react';
import { ToggleDrawer } from '../../interfaces';

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer: ToggleDrawer = (action: boolean) => () => {
    setIsOpen(action);
  };

  return {
    isOpen,
    setIsOpen,
    onClose: toggleDrawer(false),
    onOpen: toggleDrawer(true),
  };
};
