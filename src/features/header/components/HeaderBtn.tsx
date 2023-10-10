import CallIcon from '@mui/icons-material/Call';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { List, ListItem } from '@mui/material';
import { CallbackBtn } from '@/common/components';

export const HeaderBtn = () => {
  return (
    <List
      sx={{
        ml: { xs: '24px', sm: '40px', md: '80px' },
        display: 'flex',
        alignItems: 'center',
        gap: { xs: '16px', sm: '24px' },
      }}
    >
      <ListItem sx={{ p: 0 }}>
        <CallbackBtn
          sx={{ p: 0 }}
          icon={
            <CallIcon
              sx={{
                color: 'primary.c100',
                width: { xs: '24px', sm: '32px' },
                height: { xs: '24px', sm: '32px' },
              }}
            />
          }
          variant="REQUEST A CALLBACK"
        />
      </ListItem>
      <ListItem sx={{ p: 0 }}>
        <CallbackBtn
          sx={{ backgroundColor: 'primary.c100', p: 0, border: 'none' }}
          icon={
            <AttachMoneyIcon
              sx={{
                color: 'primary.c900',
                width: { xs: '24px', sm: '32px' },
                height: { xs: '24px', sm: '32px' },
              }}
            />
          }
          variant="BOOK A FREE ESTIMATE"
        />
      </ListItem>
    </List>
  );
};
