import { Box } from '@mui/material';

export const Map = () => {
  return (
    <Box
      sx={{
        border: '2px solid #1C3B77',
        borderRadius: '12px',
        overflow: 'hidden',
        marginTop: { xs: '20px', sm: '30px', md: '80px' },
        width: '100%',
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425468.2865722016!2d-81.9158085!3d33.580102499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401f363bb9bc631f%3A0xe86628ca3c55356c!2sWOW%20Clean%26Shine!5e0!3m2!1sen!2sus!4v1697304009887!5m2!1sen!2sus"
        title="Coverage map"
        width="100%"
        height="432"
        style={{ display: 'block', border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};
