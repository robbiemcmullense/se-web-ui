import React from 'react'
import ReactDOM from 'react-dom'

import { defineCustomElements, applyPolyfills } from "@se/web-ui/loader";
// Add custom element definition to the windows

applyPolyfills().then(() => {
  defineCustomElements(window);
});

import './index.css'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
