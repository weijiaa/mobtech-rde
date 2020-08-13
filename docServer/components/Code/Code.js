import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';

function Code(props) {
  const { code, styleType="a11yDark" } = props;
  const style = styles[styleType];

  return (
    <SyntaxHighlighter language="jsx" style={style}>
      {code}
    </SyntaxHighlighter>
  )
}

export default Code;
