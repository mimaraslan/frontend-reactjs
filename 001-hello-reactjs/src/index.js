import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from './Example';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Example />, document.getElementById('root'));

serviceWorker.unregister();
