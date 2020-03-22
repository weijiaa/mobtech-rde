'use strict';

if (module.hot) module.hot.accept();

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './main.less';

console.log(NODE_ENV);

function App() {
  return (
    <div><Button>按钮</Button></div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
