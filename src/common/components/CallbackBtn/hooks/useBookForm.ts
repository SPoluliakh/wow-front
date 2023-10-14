import { useFormik } from 'formik';
import * as yup from 'yup';
import { BookSubmitInterface } from '../../Popup';

const validationSchema = yup.object({
  location: yup.string().min(3, '3 leters min').required('required field').trim(),
  name: yup.string().trim(),
  phone: yup.number().typeError('Only numbers are allowed').required('required field'),
  date: yup.date().nullable(),
});

export const useBookForm = (onSubmit: BookSubmitInterface) => {
  const form = useFormik({
    initialValues: {
      location: '',
      name: '',
      phone: '',
      date: null,
      time: null,
    },

    validationSchema,
    onSubmit,
  });

  return form;
};
