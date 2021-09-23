import { Grid } from '@material-ui/core';
import { SubmitHandler, useForm } from 'react-hook-form';
import Textfield from '../../forms/Textfield/Textfield';

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Login: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <>
      <Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textfield
            controllerProps={{
              control,
              name: 'example',
              defaultValue: 'test2',
            }}
          />

          {/* register your input into the hook by invoking the "register" function */}
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register('exampleRequired', { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type='submit' />
        </form>
      </Grid>
    </>
  );
};

export default Login;
