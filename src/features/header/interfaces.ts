import React from 'react';

export interface INavItems {
  id: number;
  title: string;
  href: string;
}

export type ChangeMenuState = (event: React.KeyboardEvent | React.MouseEvent) => void;
