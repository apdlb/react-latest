import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login/LoginContainer';
import NotFound from '../components/pages/NotFound/NotFound';
import PATHS from './paths';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to={PATHS.LOGIN} />
        </Route>

        <Route path={PATHS.LOGIN}>
          <Login />
        </Route>

        <Route path={PATHS.HOME}>
          <Home />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
