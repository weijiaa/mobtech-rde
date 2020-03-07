import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div><Button>按钮</Button></div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
