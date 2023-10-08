import { useMedia } from '@/common/hooks';

export const useFlexSettings = () => {
  const { isSmUp, isMdUp } = useMedia();

  if (isMdUp) return { flexDirection: 'row', gap: '40px' };

  if (isSmUp) return { flexDirection: 'column', gap: '24px' };

  return { flexDirection: 'column-reverse', gap: '16px' };
};
