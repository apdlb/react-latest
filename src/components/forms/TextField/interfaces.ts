import { OutlinedTextFieldProps } from '@material-ui/core';
import { ControllerProps, Path } from 'react-hook-form';

export interface ITextFieldProps<T> {
  name: Path<T>;
  label?: string;
  required?: boolean; // Only to append ' *' to label
  controllerProps?: Omit<ControllerProps<T>, 'control' | 'render' | 'name'>;
  textFieldProps?: Omit<OutlinedTextFieldProps, 'variant'>;
}
