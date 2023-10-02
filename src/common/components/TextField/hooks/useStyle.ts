import { Theme } from '@mui/material';
import { CSSSelectorObjectOrCssVariables } from '@mui/system';
import { TSxVariant } from '../interfaces';
import { contacts } from '../sx';

const styleTypes: Record<TSxVariant, CSSSelectorObjectOrCssVariables<Theme>> = {
  contacts,
};

export const useStyle = (styleType: TSxVariant = 'contacts') => styleTypes[styleType];
