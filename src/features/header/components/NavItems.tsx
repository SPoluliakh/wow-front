import { List, ListItem, Typography } from '@mui/material';
import { useNav } from '../hooks';
import { HeaderBtn } from './HeaderBtn';

export const NavItems = () => {
  const navigation = useNav();

  return (
    <List sx={{ display: 'flex' }}>
      {navigation.map(({ id, title, href }) => (
        <ListItem key={id}>
          <a href={href}>
            <Typography component="p" variant="p1" color="primary.c900">
              {title}
            </Typography>
          </a>
        </ListItem>
      ))}
    </List>
  );
};
