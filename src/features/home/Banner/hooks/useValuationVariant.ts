import { useMedia } from '@/common/hooks';

export const useValuationVariant = () => {
  const { isSmUp, isMdUp } = useMedia();

  if (isMdUp) return 'p2';

  if (isSmUp) return 'p7';

  return 'p8';
};
