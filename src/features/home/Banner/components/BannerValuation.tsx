import { ListItem, Typography } from '@mui/material';

interface Props {
  text: string;
}

export const BannerValuation = ({ text }: Props) => {
  return (
    <ListItem sx={{ width: 'auto', p: 0 }}>
      <Typography variant="p2" component="p" color="primary.c900">
        {text}
      </Typography>
    </ListItem>
  );
};
