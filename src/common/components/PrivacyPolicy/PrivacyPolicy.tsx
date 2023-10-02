import { Typography } from '@mui/material';
import Link from 'next/link';

interface Props {
  text: string[];
}

export const PrivacyPolicy = ({ text }: Props) => (
  <Typography component="span" variant="p3">
    {text[0]}{' '}
    <Link href="#">
      <Typography
        variant="inherit"
        sx={{
          color: 'primary.c500',
          textDecoration: 'underline',
          display: 'inline-block',
        }}
      >
        {text[1]}
      </Typography>
    </Link>
  </Typography>
);
