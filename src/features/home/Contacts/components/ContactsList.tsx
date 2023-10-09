import { Grid } from '@mui/material';
import { IContacts } from '../interfaces';
import { ContactsListItem } from './ContactsListItem';

interface Props {
  contacts: IContacts[];
}

export const ContactsList = ({ contacts }: Props) => {
  return (
    <Grid
      container
      sx={{
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '0 !important',
        rowGap: { xs: '20px', sm: '30px', md: '80px' },
        columnGap: { sm: '30px', md: '20px' },
      }}
    >
      {contacts.map(({ id, title, text, Icon }) => (
        <Grid
          item
          key={id}
          sx={{
            p: '0 !important',
            flexBasis: {
              xs: '100%',
              sm: 'calc((100% - 30px * 1) / 2)',
              md: 'calc((100% - 20px * 2) / 3)',
            },
            transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'scale(1.01)',
            },
          }}
        >
          <ContactsListItem title={title} text={text} icon={<Icon />} />
        </Grid>
      ))}
    </Grid>
  );
};
