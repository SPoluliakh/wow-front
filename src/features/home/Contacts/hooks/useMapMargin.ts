import { useMedia } from '@/common/hooks';

export const useMapMargin = () => {
  const { isSmUp, isMdUp } = useMedia();

  if (isMdUp) return { marginTop: '80px' };

  if (isSmUp) return { marginTop: '30px' };

  return { marginTop: '20px' };
};
