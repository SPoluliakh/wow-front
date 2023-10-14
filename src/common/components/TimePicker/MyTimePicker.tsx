import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Dayjs } from 'dayjs';

interface Props {
  value: Dayjs | null;
  handleChange: (e: Dayjs | null) => void;
}

export const MyTimePicker = ({ value, handleChange }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker value={value} onChange={handleChange} />
    </LocalizationProvider>
  );
};
