import { Grid } from '@mui/material';
import { IContacts } from '../interfaces';
import { ContactsListItem } from './ContactsListItem';
import { useCartGap, useCartSize } from '../hooks';

interface Props {
  contacts: IContacts[];
}

export const ContactsList = ({ contacts }: Props) => {
  const { width, height } = useCartSize();
  const { rowGap, columnGap } = useCartGap();

  return (
    <Grid
      container
      sx={{
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '0 !important',
        rowGap,
        columnGap,
      }}
    >
      {contacts.map(({ id, title, text, Icon }) => (
        <Grid
          item
          key={id}
          sx={{
            p: '0 !important',
          }}
        >
          <ContactsListItem
            title={title}
            text={text}
            icon={<Icon />}
            width={width}
            height={height}
          />
        </Grid>
      ))}
    </Grid>
  );
};
