import { OutlinedTextFieldProps, TextField } from '@material-ui/core';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

interface ITextField<T> {
  controllerProps: Omit<ControllerProps<T>, 'render'>;
  textFieldProps?: OutlinedTextFieldProps;
}

const Textfield = <T extends FieldValues>({
  controllerProps,
  textFieldProps,
}: ITextField<T>): JSX.Element => {
  return (
    <>
      <Controller
        {...controllerProps}
        render={({ field }) => (
          <TextField {...textFieldProps} {...field} variant='outlined' />
        )}
      />
    </>
  );
};

Textfield.defaultProps = {
  textFieldProps: {},
};

export default Textfield;
