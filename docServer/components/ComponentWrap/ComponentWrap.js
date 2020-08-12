import React, { useState, useEffect, useRef } from 'react';
import { MarkDown } from '../index';
import { ajaxGetFile } from '../../utils';

function ComponentWrap(props) {
  const { module: Module, readme, codePath } = props;
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState('');
  const [copyBack, setCopyBack] = useState('');
  const el = useRef(null);

  async function getCode() {
    setCode(await ajaxGetFile(codePath));
  }

  function copy() {
    el.current.select();

    if(document.execCommand("copy")){
      setCopyBack('复制成功');
      setTimeout(() => {
        setCopyBack('');
      }, 1000)
    }
  }

  useEffect(() => {
    getCode();
  }, [codePath]);

  return (
    <div className="component-wrap">
      <Module />
      <div className="component-wrap-line">
        <div className="component-wrap-action">
          <span onClick={() => !copyBack && copy()}>{ copyBack ? '复制成功' : '复制代码' }</span>
          <span onClick={() => setShowCode(!showCode)}>{showCode ? '隐藏代码' : '显示代码'}</span>
        </div>
      </div>
      {
        showCode
        && (
          <div className="component-wrap-code">
            <MarkDown source={'```\n' + code + '\n```'} />
          </div>
        )
      }
      
      <MarkDown source={readme} />

      <textarea type="text" ref={el} value={code} style={{position: "fixed", bottom: -100}} />
    </div>
  )
}

export default ComponentWrap;
