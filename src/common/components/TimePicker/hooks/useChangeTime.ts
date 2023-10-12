import { Dayjs } from 'dayjs';
import { FormikErrors } from 'formik';

type TData = (
  name: string,
  date: Dayjs | null
) =>
  | Promise<void>
  | Promise<
      FormikErrors<{
        name: string;
        phone: string;
      }>
    >;

export const useChangeTime = (setFieldValue: TData) => {
  const handleTimeChange = (date: Dayjs | null) => {
    setFieldValue('time', date);
  };

  return handleTimeChange;
};
