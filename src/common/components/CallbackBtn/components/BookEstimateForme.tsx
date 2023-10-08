import { Button } from '@mui/material';
import { useBookForm } from '../hooks';
import { TextField } from '../../TextField';
import { Form } from '../../Form';
import { BookSubmitInterface } from '../../Popup';
import { Numbers } from './Numbers';

interface Props {
  onSubmit: BookSubmitInterface;
  variant: string;
}

export const BookEstimateForme = ({ onSubmit, variant }: Props) => {
  const { errors, values, touched, handleChange, handleBlur, handleSubmit, setFieldValue } =
    useBookForm(onSubmit);

  return (
    <Form handleSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
      <TextField
        name="data"
        placeholder="Service date"
        variant="outlined"
        value={values.data}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        error={!!errors.data && touched.data && !!errors.data}
        helperText={errors.data && touched.data && errors.data}
      />

      <TextField
        name="time"
        placeholder="Select arrival time"
        variant="outlined"
        value={values.time}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        error={!!errors.time && touched.time && !!errors.time}
        helperText={errors.time && touched.time && errors.time}
      />

      <TextField
        sx={{ mb: '16px' }}
        name="location"
        placeholder="Service location"
        variant="outlined"
        value={values.location}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        error={!!errors.location && touched.location && !!errors.location}
        helperText={errors.location && touched.location && errors.location}
      />

      <Button type="submit" sx={{ m: '0 auto' }}>
        {variant}
      </Button>
      <Numbers />
    </Form>
  );
};
