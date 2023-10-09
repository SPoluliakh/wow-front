import { useFormik } from 'formik';
import * as yup from 'yup';
import dayjs from 'dayjs';
import { BookSubmitInterface } from '../../Popup';

const validationSchema = yup.object({
  location: yup.string().min(3, '3 leters min').required('required field').trim(),
  name: yup.string().trim(),
  phone: yup.string().required('required field').trim(),
});

export const useBookForm = (onSubmit: BookSubmitInterface) => {
  const form = useFormik({
    initialValues: {
      location: '',
      name: '',
      phone: '',
    },
    validationSchema,
    onSubmit,
  });

  return form;
};
