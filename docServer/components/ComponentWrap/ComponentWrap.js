import React, { useState } from 'react';
import { MarkDown } from '../index';

function ComponentWrap(props) {
  const { module: Module, readme } = props;
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="component-wrap">
      <Module />
      <div className="component-wrap-line">
        <div className="component-wrap-action">
          <span>复制代码</span>
          <span onClick={() => setShowCode(!showCode)}>{showCode ? '隐藏代码' : '显示代码'}</span>
        </div>
      </div>
      {
        showCode
        && (
          <div className="component-wrap-code">
            <MarkDown source={
`
    import React from 'react';
    import ReactMarkDown from 'react-markdown';

    function ComponentWrap(props) {
      const { module: Module, readme } = props;

      return (
        <div className="component-wrap">
          <Module />
          <div className="component-wrap-line">
            <div className="component-wrap-action">
              <span>复制代码</span>
              <span>显示代码</span>
            </div>
          </div>
          <div className="component-wrap-code">
            code
          </div>
          <ReactMarkDown source={readme} />
        </div>
      )
    }

    export default ComponentWrap;
`} />
          </div>
        )
      }
      
      <MarkDown source={readme} />
    </div>
  )
}

export default ComponentWrap;
