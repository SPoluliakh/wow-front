import { Button } from '@mui/material';
import { useBookForm } from '../hooks';
import { TextField } from '../../TextField';
import { Form } from '../../Form';
import { BookSubmitInterface } from '../../Popup';
import { Numbers } from './Numbers';
import { MyDatePicker } from '../../DatePicker';
import { MyTimePicker } from '../../TimePicker';

interface Props {
  onSubmit: BookSubmitInterface;
  variant: string;
}

export const BookEstimateForme = ({ onSubmit, variant }: Props) => {
  const { errors, values, touched, handleChange, handleBlur, handleSubmit } = useBookForm(onSubmit);

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
      />
      <TextField
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
      <MyDatePicker />
      <MyTimePicker />
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
