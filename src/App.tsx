import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import IntlProviderWrapper from './components/IntlProviderWrapper/IntlProviderWrapper';
import Routes from './routes';
import createMyTheme from './theme';

const useStyles = makeStyles(() => {
  return {
    containerRoot: {
      height: '100vh',
    },
  };
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <IntlProviderWrapper>
      <MuiThemeProvider theme={createMyTheme()}>
        <SnackbarProvider>
          <CssBaseline>
            <Grid container className={classes.containerRoot}>
              <Routes />
            </Grid>
          </CssBaseline>
        </SnackbarProvider>
      </MuiThemeProvider>
    </IntlProviderWrapper>
  );
};

export default App;
