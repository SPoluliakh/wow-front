import { ListItem, Typography } from '@mui/material';

interface Props {
  text: string;
  id: number;
}

export const BannerValuation = ({ text, id }: Props) => (
  <ListItem key={id} sx={{ width: 'auto' }}>
    <Typography variant="p2" component="p" color="primary.c900">
      {text}
    </Typography>
  </ListItem>
);
