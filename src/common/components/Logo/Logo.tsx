import Image from 'next/image';
import { useLogoData } from './hooks';
import { TLogoTypes } from './interface';
import { StyledLink } from '../styled';

interface Props {
  variant: TLogoTypes;
}

export const Logo = ({ variant }: Props) => {
  const data = useLogoData(variant);

  return (
    <StyledLink href="/" sx={{ cursor: 'pointer', my: 'auto' }}>
      <Image
        src={data.src}
        alt="logo"
        width={data.width}
        height={data.height}
        style={{ display: 'block' }}
      />
    </StyledLink>
  );
};
