import React, { Component } from 'react';
// import { Route, Switch, BrowserRouter } from "react-router-dom"
import ShellLayout from './layouts/shell';
// import DefaultLayout from './layouts/default';

import Home from './pages/home';

// const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
//   <Route {...rest} render={props => (
//     <Layout>
//       <Component {...props} />
//     </Layout>
//   )} />
// )


class App extends Component {
  render() {
    return (
      <se-app>
        <ShellLayout>
          <Home />
        </ShellLayout>
      </se-app>
    );
  }
}

export default App;
