import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import { defineCustomElements } from '@se/web-ui/loader'; // "@se/web-ui/core/loader"
// // Add custom element definition to the windows
defineCustomElements(window);

ReactDOM.render(<App />, document.getElementById('root'));
