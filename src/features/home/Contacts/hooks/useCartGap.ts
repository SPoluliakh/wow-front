import { useMedia } from '@/common/hooks';

export const useCartGap = () => {
  const { isSmUp, isMdUp } = useMedia();

  if (isMdUp) return { rowGap: '80px', columnGap: '20px' };

  if (isSmUp) return { rowGap: '30px', columnGap: '30px' };

  return { rowGap: '20px', columnGap: 0 };
};
