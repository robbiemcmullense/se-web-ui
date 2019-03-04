import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import { defineCustomElements as defineSeComponent } from '@se/web-ui/loader'; // "@se/web-ui/core/loader"
// // Add custom element definition to the windows
defineSeComponent(window);

ReactDOM.render(<App />, document.getElementById('root'));
