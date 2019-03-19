import React from 'react';
import Layout from './Hoc/Layout';
import { Switch } from 'react-router-dom';
import Home from './components/home';
import SignIn from './components/signin/index';
import Dashboard from './components/admin/Dashboard';
import PrivateRoutes from './components/authRoutes/PrivateRoutes';
import PublicRoutes from './components/authRoutes/PublicRoutes';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoutes
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PublicRoutes
          restricted={true}
          {...props}
          path="/sign_in"
          exact
          component={SignIn}
        />
        <PublicRoutes
          restricted={false}
          {...props}
          path="/"
          exact
          component={Home}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
