import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import { applyPolyfills, defineCustomElements } from '@se/web-ui/loader';
// Add custom element definition to the windows
applyPolyfills().then(() => {
  defineCustomElements(window);
});

ReactDOM.render(<App />, document.getElementById('root'));

