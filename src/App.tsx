import { MuiThemeProvider } from '@material-ui/core/styles';
import createMyTheme from './theme';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={createMyTheme()}>
      <div />
    </MuiThemeProvider>
  );
};

export default App;
