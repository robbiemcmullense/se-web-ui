import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom"
import ShellLayout from './layouts/shell';
import DefaultLayout from './layouts/default';
import { SeApp } from '@se/web-ui-react';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Icons from './pages/icons';
import NoPage from './pages/404';
import './styles.scss';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)


class App extends Component {
  render() {
    return (
      <SeApp>
        <BrowserRouter>
          <Switch>
            <AppRoute exact path="/" layout={ShellLayout} component={Home} />
            <AppRoute path="/dashboard" layout={ShellLayout} component={Dashboard} />
            <AppRoute path="/icons" layout={ShellLayout} component={Icons} />
            <AppRoute path="/*" layout={DefaultLayout} component={NoPage} />
          </Switch>
        </BrowserRouter>
      </SeApp>
    );
  }
}

export default App;