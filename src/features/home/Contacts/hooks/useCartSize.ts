import { useMedia } from '@/common/hooks';

export const useCartSize = () => {
  const { isMdUp } = useMedia();

  if (isMdUp) return { width: 380, height: 152 };

  return { width: 339, height: 152 };
};
