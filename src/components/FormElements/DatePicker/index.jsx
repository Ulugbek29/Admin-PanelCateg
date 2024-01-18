import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"
import dayjs from 'dayjs';

const today = dayjs();

const HFDatePicker = ({ control, className, name, label, width, inputProps, disabledHelperText, placeholder, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}>
    <Controller
      control={control}
      name={name}
    //   defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="w-full p-0 mb-1">
          <DatePicker
            // defaultValue={today}
            // disablePast
            name={name}
            value={dayjs(value)}
            onChange={onChange}
            views={['year', 'month', 'day']}
          />
        </div>
      )}
    ></Controller></DemoContainer>
    </LocalizationProvider>
   
  )
}

export default HFDatePicker