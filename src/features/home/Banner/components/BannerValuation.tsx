import { ListItem, Typography } from '@mui/material';
import { useValuationVariant } from '../hooks';

interface Props {
  text: string;
}

export const BannerValuation = ({ text }: Props) => {
  const variant = useValuationVariant();
  return (
    <ListItem sx={{ width: 'auto', p: 0 }}>
      <Typography variant={variant} component="p" color="primary.c900">
        {text}
      </Typography>
    </ListItem>
  );
};
