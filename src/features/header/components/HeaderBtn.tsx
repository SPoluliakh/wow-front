import CallIcon from '@mui/icons-material/Call';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { List, ListItem } from '@mui/material';
import { CallbackBtn } from '@/common/components';

export const HeaderBtn = () => {
  return (
    <List
      sx={{
        ml: { sm: '40px', md: '80px' },
        display: 'flex',
        alignItems: 'center',
        gap: { xs: '16px', sm: '24px' },
        p: 0,
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
          sx={{
            backgroundColor: 'primary.c100',
            color: 'primary.c900',
            p: 0,
            border: '2 px solid primary.c900',
          }}
          icon={
            <AttachMoneyIcon
              sx={{
                color: 'currentColor',
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
