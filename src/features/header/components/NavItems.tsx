import { List, ListItem, Typography } from '@mui/material';
import { useNav } from '../hooks';

export const NavItems = () => {
  const navigation = useNav();

  return (
    <List sx={{ display: 'flex', gap: { sm: '40px', md: '80px' }, p: 0 }}>
      {navigation.map(({ id, title, href }) => (
        <ListItem key={id} sx={{ p: 0 }}>
          <Typography
            component="a"
            href={href}
            variant="p1"
            color="primary.c900"
            sx={{ py: '16px' }}
          >
            {title}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};
