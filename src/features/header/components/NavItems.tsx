import { List, ListItem, Typography } from '@mui/material';
import { useNav } from '../hooks';
import { useMedia } from '@/common/hooks';

export const NavItems = () => {
  const navigation = useNav();
  const { isMdUp } = useMedia();

  return (
    <List sx={{ display: 'flex', gap: isMdUp ? '80px' : '40px' }}>
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
