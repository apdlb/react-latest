import { SubmitHandler } from 'react-hook-form';

export type ILoginInputs = {
  username: string;
  password: string;
};

export interface ILoginProps {
  onSubmit: SubmitHandler<ILoginInputs>;
}
