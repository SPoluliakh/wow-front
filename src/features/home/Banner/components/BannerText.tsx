import { Box, Typography } from '@mui/material';
import { IBannerText } from '../interfaces';
import { FeedbackBtn } from './FeedbackBtn';

interface Props {
  text: IBannerText;
}

export const BannerText = ({ text }: Props) => (
  <Box sx={{ maxWidth: { xs: '100%', sm: '560px' } }}>
    <Typography variant="h1" component="h1" sx={{ mb: { xs: 3 }, color: 'primary.c100' }}>
      {text.title}
    </Typography>
    <Typography variant="p1" component="p" sx={{ mb: { xs: 6, sm: 8 }, color: 'primary.c100' }}>
      {text.text}
    </Typography>

    <FeedbackBtn />
  </Box>
);
