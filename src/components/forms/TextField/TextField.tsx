import { TextField as MuiTextField } from '@material-ui/core';
import {
  Controller,
  FieldError,
  FieldValues,
  useFormContext,
} from 'react-hook-form';
import useFormatMessage from '../../../hooks/useFormatMessage';
import { ITextFieldProps } from './interfaces';

const TextField = <T extends FieldValues>(
  props: ITextFieldProps<T>
): JSX.Element => {
  const {
    name,
    label = '',
    required,
    controllerProps = {},
    textFieldProps = {},
  } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();
  const { formatMessage, formatRequiredField } = useFormatMessage();
  const { [name]: fieldError } = errors;
  const error = fieldError as FieldError;

  let fieldLabel = label;
  if (fieldLabel) {
    fieldLabel = required
      ? formatRequiredField(fieldLabel)
      : formatMessage(fieldLabel);
  }

  /**
   * Three ways to print errors
   * 1. On TextField
   * 2. Material UI component
   * 3. React Hook Form controller with Material UI component
   */

  return (
    <div>
      <Controller
        {...controllerProps}
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <MuiTextField
              label={fieldLabel}
              {...textFieldProps}
              {...field}
              variant='outlined'
              size='small'
              error={!!error}
              // 1. On TextField
              helperText={error?.message ? formatMessage(error.message) : ''}
            />
          );
        }}
      />

      {/* 2. Material UI component */}
      {/* {error?.message && (
        <FormHelperText error>{formatMessage(error.message)}</FormHelperText>
      )} */}

      {/* 3. React Hook Form controller with Material UI component */}
      {/* <ErrorMessage
        errors={errors}
        name={
          name as FieldName<
            FieldValuesFromFieldErrors<
              DeepMap<DeepPartial<UnionLike<T>>, FieldError>
            >
          >
        }
        render={({ message }) => {
          return (
            <FormHelperText error>{formatMessage(message)}</FormHelperText>
          );
        }}
      /> */}
    </div>
  );
};

export default TextField;
