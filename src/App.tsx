import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
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
    <MuiThemeProvider theme={createMyTheme()}>
      <SnackbarProvider>
        <CssBaseline>
          <Grid container className={classes.containerRoot}>
            <Routes />
          </Grid>
        </CssBaseline>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
};

export default App;
