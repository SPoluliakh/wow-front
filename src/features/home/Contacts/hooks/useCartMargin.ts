import { useMedia } from '@/common/hooks';

export const useCartMargin = () => {
  const { isMdUp } = useMedia();

  if (isMdUp) return 60;

  return 0;
};
