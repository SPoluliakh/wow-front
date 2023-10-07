import { Box } from '@mui/material';
import { useMapMargin } from '../hooks';

export const Map = () => {
  const { marginTop } = useMapMargin();

  return (
    <Box
      sx={{
        border: '2px solid #1C3B77',
        borderRadius: '12px',
        overflow: 'hidden',
        marginTop,
        width: '100%',
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53213.81395692842!2d-81.7667589021548!3d33.530937728093335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f84d1a70c4815d%3A0xb5330af448d9a45b!2zQWlrZW4sINCf0ZbQstC00LXQvdC90LAg0JrQsNGA0L7Qu9GW0L3QsCwg0KHQv9C-0LvRg9GH0LXQvdGWINCo0YLQsNGC0Lgg0JDQvNC10YDQuNC60Lg!5e0!3m2!1suk!2sua!4v1696620556928!5m2!1suk!2sua"
        width="100%"
        height="432"
        style={{ display: 'block', border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};
