import { Grid } from '@mui/material';
import { IContacts } from '../interfaces';
import { ContactsListItem } from './ContactsListItem';
import { useCartMargin, useCartSize } from '../hooks';

interface Props {
  contacts: IContacts[];
}

export const ContactsList = ({ contacts }: Props) => {
  const { width, height } = useCartSize();
  const margin = useCartMargin();

  return (
    <Grid
      container
      sx={{
        gap: '20px',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '0 !important',
      }}
    >
      {contacts.map(({ id, title, text, Icon }) => (
        <Grid
          item
          key={id}
          sx={{
            p: '0 !important',
            '&:nth-child(-n + 3)': {
              mb: `${margin}px`,
            },
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
