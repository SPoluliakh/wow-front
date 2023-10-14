import { useFormik } from 'formik';
import * as yup from 'yup';
import { SubmitInterface } from '../../Popup';

const validationSchema = yup.object({
  name: yup.string().min(3, '3 leters min').required('required field').trim(),
  phone: yup.number().typeError('Only numbers are allowed').required('required field'),
});

export const useForm = (onSubmit: SubmitInterface) => {
  const form = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    validationSchema,
    onSubmit,
  });

  return form;
};
