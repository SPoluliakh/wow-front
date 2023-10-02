import React from 'react';

export interface ICatalogItems {
  id: number;
  title: string;
  href: string;
}

export interface ICatalog {
  id: number;
  type: string;
  title: string;
  href?: string;
  items: ICatalogItems[];
}

export type ChangeMenuState = (event: React.KeyboardEvent | React.MouseEvent) => void;

export type ToggleDrawer = (action: boolean) => ChangeMenuState;
