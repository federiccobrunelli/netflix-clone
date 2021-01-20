import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home, Browse, Signin, Signup} from './PAGES'
import * as ROUTES  from './CONSTANTS/routes';

export default function App() {
  return (
    <Router>

      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home/>
        </Route>

        <Route exact path={ROUTES.SIGN_IN}>
          <Signin/>
        </Route>

        <Route exact path={ROUTES.SIGN_UP}>
          <Signup/>
        </Route>
        
        <Route exact path={ROUTES.BROWSE}>
          <Browse/>
        </Route>
      </Switch>
      
    </Router>
  );
}