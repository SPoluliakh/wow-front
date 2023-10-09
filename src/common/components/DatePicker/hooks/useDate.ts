import { useState } from 'react';

export const useDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
  };

  return { selectedDate, handleDateChange };
};
