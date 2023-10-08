import { useMedia } from '@/common/hooks';

export const useCartGap = () => {
  const { isSmUp, isMdUp } = useMedia();

  if (isMdUp) return { gap: '20px' };

  if (isSmUp) return { gap: '30px' };

  return { gap: '20px' };
};
