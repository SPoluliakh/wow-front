import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export const useTime = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return { value, handleChange };
};
