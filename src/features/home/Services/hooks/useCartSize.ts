import { useMedia } from '@/common/hooks';

export const useCartSize = () => {
  const { isSmUp, isMdUp } = useMedia();

  if (isMdUp) return { width: 380, height: 440 };

  if (isSmUp) return { width: 339, height: 392 };

  return { width: 361, height: 325 };
};
