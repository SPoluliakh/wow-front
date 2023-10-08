import { IconButton } from '@mui/material';
import { useWindowScrollPositions } from './hooks';
import { ArrowUpwardRounded } from '@mui/icons-material';

export const ArrowUp = () => {
  const { scrollY } = useWindowScrollPositions();

  const moveUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {scrollY > 100 && (
        <IconButton
          aria-label="move up"
          onClick={moveUp}
          sx={{
            position: 'fixed',
            right: '30px',
            bottom: '30px',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            border: '4px solid',
            borderColor: 'primary.c900',
          }}
        >
          <ArrowUpwardRounded sx={{ width: '48px', height: '48px', color: 'primary.c900' }} />
        </IconButton>
      )}
    </>
  );
};
