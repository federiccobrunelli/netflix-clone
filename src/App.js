import React, {useContext} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './PAGES'
import * as ROUTES from './CONSTANTS/routes';
import { IsUserRedirect, ProtectedRoute } from './HELPERS/routes';
import { useAuthListener } from './HOOKS';


export default function App() {
  
  const { user } = useAuthListener();


  return (
    <Router>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGNIN}
      >
        <Signin />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGNUP}
      >
        <Signup />
      </IsUserRedirect>

      <ProtectedRoute
        user={user}
        path={ROUTES.BROWSE}
      >
        <Browse />
      </ProtectedRoute>

      <IsUserRedirect
        user={user}
        path={ROUTES.HOME}
        loggedInPath={ROUTES.BROWSE}
        exact
      >
        <Home />
      </IsUserRedirect>

    </Router>
  );
}