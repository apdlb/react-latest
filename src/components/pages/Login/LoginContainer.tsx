import { SubmitHandler } from 'react-hook-form';
import { ILoginInputs } from './interfaces';
import Login from './Login';

const LoginContainer: React.FC = () => {
  const onSubmit: SubmitHandler<ILoginInputs> = data => console.log(data);

  return (
    <>
      <Login onSubmit={onSubmit} />
    </>
  );
};

export default LoginContainer;
