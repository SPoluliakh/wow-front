import { MdCheckCircle, MdError } from 'react-icons/md';
import { InputAdornment, TextField as TextFieldMUI, TextFieldProps } from '@mui/material';
import { useStyle } from './hooks';
import { TSxVariant } from './interfaces';

interface IExtendProps {
  errorMessage?: string;
  touched?: boolean;
  sxVariant?: TSxVariant;
}

export const TextField = ({
  sx,
  sxVariant,
  errorMessage,
  touched,
  ...props
}: TextFieldProps & IExtendProps) => {
  const sxStyle = useStyle(sxVariant);
  return (
    <TextFieldMUI
      autoComplete="off"
      variant={sxVariant === 'contacts' ? 'outlined' : undefined}
      InputLabelProps={{ shrink: true }}
      InputProps={
        !props.multiline
          ? {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    fontSize: '24px',
                    color: !errorMessage ? 'primary.c700' : 'error.c900',
                  }}
                >
                  {!!props.value && !errorMessage && <MdCheckCircle />}
                  {errorMessage && touched && <MdError />}
                </InputAdornment>
              ),
            }
          : undefined
      }
      fullWidth
      error={!!errorMessage && touched}
      helperText={errorMessage && touched && errorMessage}
      {...props}
      sx={{
        ...sxStyle,
        ...sx,
      }}
    />
  );
};
