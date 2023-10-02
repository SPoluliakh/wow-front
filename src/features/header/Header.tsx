import { useMedia } from '@/common/hooks';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';

export const Header = () => {
  const { isSmUp } = useMedia();
  return (
    <>
      {!isSmUp && <MobileHeader />}
      {isSmUp && <DesktopHeader />}
    </>
  );
};
