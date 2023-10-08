import CallIcon from '@mui/icons-material/Call';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { List, ListItemButton, ListItemIcon } from '@mui/material';
import { useBtnParameters } from '../hooks';

export const HeaderBtn = () => {
  const { ml, gap, width, height, py } = useBtnParameters();

  return (
    <List sx={{ ml, display: 'flex', alignItems: 'center', gap }}>
      <ListItemButton sx={{ p: 0 }}>
        <ListItemIcon
          sx={{
            borderRadius: '12px',
            px: '16px',
            py,
            backgroundColor: 'primary.c900',
            overflow: 'hidden',
          }}
        >
          <CallIcon sx={{ color: 'primary.c100', width, height }} />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton sx={{ p: 0 }}>
        <ListItemIcon
          sx={{
            border: '2px solid',
            borderColor: 'primary.c900',
            borderRadius: '12px',
            px: '16px',
            py,
            backgroundColor: 'primary.c100',
            overflow: 'hidden',
          }}
        >
          <AttachMoneyIcon sx={{ color: 'primary.c900', width, height }} />
        </ListItemIcon>
      </ListItemButton>
    </List>
  );
};
