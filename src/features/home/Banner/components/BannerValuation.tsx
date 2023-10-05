import { ListItem, Typography } from '@mui/material';

interface Props {
  text: string;
}

export const BannerValuation = ({ text }: Props) => (
  <ListItem sx={{ width: 'auto' }}>
    <Typography variant="p2" component="p" color="primary.c900">
      {text}
    </Typography>
  </ListItem>
);
