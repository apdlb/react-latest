import { Grid, TextField } from '@material-ui/core';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import CustomTextfield from '../../forms/Textfield/Textfield';

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
          {/* register your input into the hook by invoking the "register" function */}
          {/* <Controller
            control={control}
            name='example'
            defaultValue='test'
            render={({ field }) => <TextField {...field} variant='outlined' />}
          /> */}

          <CustomTextfield
            control={control}
            name='example'
            defaultValue='test2'
          />

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
