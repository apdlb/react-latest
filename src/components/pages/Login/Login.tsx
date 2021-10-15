import { Button, Grid } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '../../forms/TextField/TextField';
import { ILoginInputs, ILoginProps } from './interfaces';
import LoginSchema from '../../../utils/validators/loginValidator';
import useFormatMessage from '../../../hooks/useFormatMessage';

const Login: React.FC<ILoginProps> = props => {
  const { onSubmit } = props;
  const form = useForm<ILoginInputs>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const { formatMessage } = useFormatMessage();

  return (
    <>
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
                spacing={2}
              >
                <Grid item>
                  <TextField<ILoginInputs>
                    name='username'
                    label='app.login.username'
                    required
                  />
                </Grid>

                <Grid item>
                  <TextField<ILoginInputs>
                    name='password'
                    label='app.login.password'
                    required
                    textFieldProps={{ type: 'password' }}
                  />
                </Grid>

                <Grid item>
                  <Button variant='contained' type='submit'>
                    {formatMessage('app.login.login')}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </FormProvider>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
