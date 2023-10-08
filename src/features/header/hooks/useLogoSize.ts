import { useMedia } from '@/common/hooks';

export const useLogoSize = () => {
  const { isSmUp, isMdUp } = useMedia();

  if (isMdUp) return 'desktop';

  if (isSmUp) return 'tablet';

  return 'mobile';
};
