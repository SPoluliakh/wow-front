import { Button, Typography } from '@mui/material';
import { useForm } from '../hooks';
import { TextField } from '../../TextField';
import { Form } from '../../Form';
import { SubmitInterface } from '../../Popup';

interface Props {
  onSubmit: SubmitInterface;
  variant: string;
}

export const CallbackForm = ({ onSubmit, variant }: Props) => {
  const { errors, values, touched, handleChange, handleBlur, handleSubmit, setFieldValue } =
    useForm(onSubmit);

  return (
    <Form handleSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
      <TextField
        name="name"
        placeholder="Your name"
        variant="outlined"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        error={!!errors.name && touched.name && !!errors.name}
        helperText={errors.name && touched.name && errors.name}
      />
      <TextField
        sx={{ mb: '16px' }}
        name="phone"
        placeholder="Contact number"
        variant="outlined"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        error={!!errors.phone && touched.phone && !!errors.phone}
        helperText={errors.phone && touched.phone && errors.phone}
      />

      <Button type="submit" sx={{ m: '0 auto', mb: '48px' }}>
        {variant}
      </Button>

      <Typography variant="p5" component="a" color="primary.c900" href="tel:8036341263">
        (803)634-1263
      </Typography>
      <Typography
        variant="p5"
        component="a"
        color="primary.c900"
        href="tel:8035072505"
        sx={{ display: 'block', mt: '20px' }}
      >
        (803)507-2505
      </Typography>
    </Form>
  );
};
