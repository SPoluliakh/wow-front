import { useMedia } from '@/common/hooks';

export const useMapSize = () => {
  const { isSmUp, isMdUp } = useMedia();

  if (isMdUp) return { marginTop: '80px', width: '1180px' };

  if (isSmUp) return { marginTop: '30px', width: '708px' };

  return { marginTop: '20px', width: '358px' };
};
