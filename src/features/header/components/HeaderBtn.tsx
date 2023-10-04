import CallIcon from '@mui/icons-material/Call';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { ListItemButton, ListItemIcon } from '@mui/material';

export const HeaderBtn = () => {
  return (
    <>
      <ListItemButton sx={{ p: 0, ml: '80px' }}>
        <ListItemIcon
          sx={{
            borderRadius: '12px',
            p: '8px 16px',
            backgroundColor: 'primary.c900',
          }}
        >
          <CallIcon sx={{ color: 'primary.c100' }} />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton sx={{ p: 0, ml: '24px' }}>
        <ListItemIcon
          sx={{
            borderRadius: '12px',
            p: '8px 16px',
            backgroundColor: 'primary.c100',
          }}
        >
          <AttachMoneyIcon sx={{ color: 'primary.c900' }} />
        </ListItemIcon>
      </ListItemButton>
    </>
  );
};
