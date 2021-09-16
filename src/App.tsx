import { MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import createMyTheme from './theme';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={createMyTheme()}>
      <SnackbarProvider>
        <div />
      </SnackbarProvider>
    </MuiThemeProvider>
  );
};

export default App;
