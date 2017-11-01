import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Welcome from '../pages/Welcome/Welcome';
import EventDetails from '../pages/EventDetails/EventDetails';

const NotFound = () => (
  <div>
    404! - <NavLink to='/' activeClassName='is-active'>Go Home!</NavLink>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <Switch>
        <Route path='/' component={Welcome} exact={true} />
        <Route path='/events/:id' component={EventDetails} />
        <Route component={NotFound} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default AppRouter;
