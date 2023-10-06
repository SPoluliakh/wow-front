import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';

const contactsList: IContacts[] = [
  {
    id: 1,
    title: 'Phone',
    text: '(803)634-1263 (803)507-2505',
    Icon: CallIcon,
  },
  {
    id: 2,
    title: 'E-mail',
    text: 'wowcleanandshine@gmail.com',
    Icon: MailOutlineIcon,
  },
  {
    id: 3,
    title: 'Service area',
    text: 'Aiken and CSRA',
    Icon: PlaceIcon,
  },
  {
    id: 4,
    title: 'Instagram',
    text: 'wowcleanandshine',
    Icon: CallIcon,
  },
  {
    id: 5,
    title: 'Facebook',
    text: ' wowcleanandshine',
    Icon: MailOutlineIcon,
  },
  {
    id: 6,
    title: 'Google reviews',
    text: 'WOW Clean & Shine',
    Icon: PlaceIcon,
  },
];

import { IContacts } from '../interfaces';

export const useContacts = (): IContacts[] => contactsList;
