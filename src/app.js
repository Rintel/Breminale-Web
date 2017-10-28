import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Welcome from './pages/Welcome/Welcome';
import EventDetails from './pages/EventDetails/EventDetails';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const NotFound = () => (
  <div>
    404! - <NavLink to='/' activeClassName='is-active'>Go Home!</NavLink>
  </div>
);

const routes = (
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


ReactDOM.render(routes, document.getElementById('app'));
