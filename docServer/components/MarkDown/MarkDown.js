import React, { useRef, useLayoutEffect } from 'react';
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";


function MarkDown(props) {
  const { source } = props;

  return (
    <PreviewLayout>
      {/* <MdPreviewer md={source}></MdPreviewer>
      <CodePreviewer code={source} showCode={true}>
        your-component-here
      </CodePreviewer> */}
      <MdPreviewer md={source}></MdPreviewer>
    </PreviewLayout>
  )
}

export default MarkDown;
