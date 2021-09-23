import { TextField } from '@material-ui/core';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

const Textfield = <T extends FieldValues>(
  props: Omit<ControllerProps<T>, 'render'>
): React.ReactElement => {
  return (
    <>
      <Controller
        {...props}
        render={({ field }) => <TextField {...field} variant='outlined' />}
      />
    </>
  );
};

export default Textfield;
