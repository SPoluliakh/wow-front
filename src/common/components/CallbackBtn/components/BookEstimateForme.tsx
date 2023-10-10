import { Button } from '@mui/material';
import { Dayjs } from 'dayjs';
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
  const { setFieldValue, errors, values, touched, handleChange, handleBlur, handleSubmit } =
    useBookForm(onSubmit);

  const handleDateChange = (date: Date | null) => {
    setFieldValue('date', date);
  };
  const handleDateChange2 = (time: Dayjs | null) => {
    setFieldValue('time', time);
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      sx={{
        flexGrow: 1,
        '& .css-7rtjrq-MuiFormControl-root-MuiTextField-root, & .css-1f6m251-MuiFormControl-root-MuiTextField-root':
          {
            width: '400px',
            margin: '0 auto',
            borderRadius: '12px',
            marginBottom: '24px',
            background: 'white',
            overflow: 'hidden',
            height: '42px',
            borderColor: 'primary.c300',
            borderWidth: 1,
            borderStyle: 'solid',
          },
        '& .css-sgajti-MuiInputBase-root-MuiOutlinedInput-root': {
          height: '42px',
        },
        '& .MuiFormControl-root': {
          pt: 0,
        },
        '& .MuiInputBase-inputAdornedEnd::placeholder': { fontFamily: 'inherit', fontSize: '16px' },
        '& .MuiDateCalendar-root': {
          backgroundColor: 'primary.c900',
        },
      }}
    >
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
      <MyDatePicker value={values.date} handleChange={handleDateChange} />
      <MyTimePicker value={values.time} handleChange={handleDateChange2} />
      <TextField
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
