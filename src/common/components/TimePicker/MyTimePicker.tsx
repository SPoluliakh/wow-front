import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Dayjs } from 'dayjs';
import { useTime } from './hooks';

export const MyTimePicker = () => {
  const { value, handleChange } = useTime();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker value={value} onChange={handleChange} />
    </LocalizationProvider>
  );
};
