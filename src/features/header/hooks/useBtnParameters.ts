import { useMedia } from '@/common/hooks';

export const useBtnParameters = () => {
  const { isSmUp, isMdUp } = useMedia();

  if (isMdUp) return { ml: '80px', gap: '24px', width: '32px', height: '32px', py: '8px' };

  if (isSmUp) return { ml: '40px', gap: '24px', width: '32px', height: '32px', py: '8px' };

  return { ml: 0, gap: '16px', width: '24px', height: '24px', py: '4px' };
};
