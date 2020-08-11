'use strict';

if (module.hot) module.hot.accept();

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { $PATHS, $POST, $DELETE, $PUT, $GET } from './ajax';
import App from './views/App';

window.$GET = $GET;

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('app')
);
