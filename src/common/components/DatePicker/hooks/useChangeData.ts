import { FormikErrors } from 'formik';

type TData = (
  name: string,
  date: Date | null
) =>
  | Promise<void>
  | Promise<
      FormikErrors<{
        location: string;
        name: string;
        phone: string;
        date: null;
        time: null;
      }>
    >;

export const useChangeData = (setFieldValue: TData) => {
  const handleDateChange = (date: Date | null) => {
    setFieldValue('date', date);
  };

  return handleDateChange;
};
