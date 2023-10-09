import CallIcon from '@mui/icons-material/Call';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { List, ListItemButton, ListItemIcon } from '@mui/material';
import { useBtnParameters } from '../hooks';
import { CallbackBtn } from '@/common/components';

export const HeaderBtn = () => {
  const { ml, gap, width, height, py } = useBtnParameters();

  return (
    <List sx={{ ml, display: 'flex', alignItems: 'center', gap }}>
      <ListItemButton sx={{ p: 0 }}>
        <ListItemIcon
          sx={{
            borderRadius: '12px',

            backgroundColor: 'primary.c900',
            overflow: 'hidden',
            width: '64px',
          }}
        >
          <CallbackBtn
            sx={{ p: 0 }}
            icon={<CallIcon sx={{ color: 'primary.c100', width, height }} />}
            variant="REQUEST A CALLBACK"
          />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton sx={{ p: 0 }}>
        <ListItemIcon
          sx={{
            border: '2px solid',
            borderColor: 'primary.c900',
            borderRadius: '12px',
            backgroundColor: 'primary.c100',
            overflow: 'hidden',
            width: '64px',
          }}
        >
          <CallbackBtn
            sx={{ backgroundColor: 'primary.c100', p: 0, border: 'none' }}
            icon={<AttachMoneyIcon sx={{ color: 'primary.c900', width, height }} />}
            variant="BOOK A FREE ESTIMATE"
          />
        </ListItemIcon>
      </ListItemButton>
    </List>
  );
};
