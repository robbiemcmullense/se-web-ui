import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import { defineCustomElements as defineSeComponent } from '@se/ui-web-components/loader'; // "@se/ui-web-components/core/loader"
// // Add custom element definition to the windows
defineSeComponent(window);

ReactDOM.render(<App />, document.getElementById('root'));
