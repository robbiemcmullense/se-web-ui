import 'react-app-polyfill/ie11';
import { applyPolyfills, defineCustomElements } from '@se/web-ui/loader';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';


applyPolyfills().then(() => {
    defineCustomElements(window);
});

ReactDOM.render(<App />, document.getElementById('root'));
