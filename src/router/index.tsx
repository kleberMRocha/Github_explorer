import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Repository from '../pages/Repository';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/repository" component={Repository} exact />
  </Switch>
);

export default Routes;
