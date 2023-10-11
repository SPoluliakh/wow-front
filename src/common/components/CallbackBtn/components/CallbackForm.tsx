import { useForm } from '../hooks';
import { TextField } from '../../TextField';
import { Form } from '../../Form';
import { SubmitInterface } from '../../Popup';
import { Numbers } from './Numbers';
import { Button } from '@mui/material';

interface Props {
  onSubmit: SubmitInterface;
  variant: string;
  numbers?: boolean;
}

export const CallbackForm = ({ onSubmit, variant, numbers }: Props) => {
  const { errors, values, touched, handleChange, handleBlur, handleSubmit } = useForm(onSubmit);

  return (
    <Form handleSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
      <TextField
        sx={{ width: '100%', maxWidth: '400px', mb: '8px', pt: 0 }}
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
        sx={{ mb: '40px', width: '100%', maxWidth: '400px', pt: 0 }}
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

      <Button type="submit" sx={{ m: '0 auto' }}>
        {variant}
      </Button>

      {!numbers && <Numbers />}
    </Form>
  );
};
