import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDate } from './hooks';

export const MyDatePicker = () => {
  const { selectedDate, handleDateChange } = useDate();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={selectedDate} onChange={handleDateChange} sx={{ width: '100%' }} />
    </LocalizationProvider>
  );
};
