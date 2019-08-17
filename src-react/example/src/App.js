import React, { Component } from 'react'

import { App as SeApp, Header } from 'web-ui-react'

export default class App extends Component {
  render () {
    return (
      <SeApp>
        <Header appTitle='Modern React component module' />
      </SeApp>
    )
  }
}
