import React, { useState, useEffect, useRef } from 'react';
import { MarkDown } from '../index';
import { ajaxGetFile } from '../../utils';

function ComponentWrap(props) {
  const { module: Module, readme, codePath } = props;
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState('');
  const el = useRef(null);

  async function getCode() {
    setCode(await ajaxGetFile(codePath));
  }

  function copy() {
    console.log(el)
    el.current.select();
    if(document.execCommand("copy")){
      alert('复制成功！');
    }
  }

  useEffect(() => {
    getCode();
  }, []);

  return (
    <div className="component-wrap">
      <Module />
      <div className="component-wrap-line">
        <div className="component-wrap-action">
          <span onClick={copy}>复制代码</span>
          <span onClick={() => setShowCode(!showCode)}>{showCode ? '隐藏代码' : '显示代码'}</span>
        </div>
      </div>
      <input type="text" ref={el} value={code} style={{position: "fixed", top: -100}} />
      {
        showCode
        && (
          <div className="component-wrap-code">
            <MarkDown source={'```\n' + code + '\n```'} />
          </div>
        )
      }
      
      <MarkDown source={readme} />
    </div>
  )
}

export default ComponentWrap;
