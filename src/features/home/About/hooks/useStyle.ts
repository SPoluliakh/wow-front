import { useMedia } from '@/common/hooks';

export const useStyle = () => {
  const { isSmUp, isMdUp } = useMedia();

  if (isMdUp) return { top: 0, left: 74, py: '80px' };

  if (isSmUp) return { top: -80, left: -36, py: '40px' };

  return { top: 32, left: 16, py: '20px' };
};
