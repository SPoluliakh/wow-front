import { useMedia } from '@/common/hooks';

export const usePosition = () => {
  const { isSmUp, isMdUp } = useMedia();

  if (isMdUp)
    return {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 0,
      paddingBottom: '80px',
    };

  if (isSmUp)
    return {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 0,
      paddingBottom: '40px',
    };

  return {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32px',
    paddingBottom: '20px',
  };
};
