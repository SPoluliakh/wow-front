import { useFormik } from 'formik';
import * as yup from 'yup';
import { BookSubmitInterface } from '../../Popup';

const validationSchema = yup.object({
  location: yup.string().min(3, '3 leters min').required('required field').trim(),
  time: yup.string().required('required field').trim(),
  data: yup.string().required('required field').trim(),
});

export const useBookForm = (onSubmit: BookSubmitInterface) => {
  const form = useFormik({
    initialValues: {
      location: '',
      time: '',
      data: '',
    },
    validationSchema,
    onSubmit,
  });

  return form;
};
