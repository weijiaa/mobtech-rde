import React from 'react';
import { ComponentWrap, MarkDown } from '../../components'

function ComponentDoc(props) {
  const {readme, demoList} = props;
  const [compReadme, apiReadme] = readme?.split('## API') || [];

  return (
    <>
      { <MarkDown source={compReadme} /> }
      { <MarkDown source="## 代码演示" /> }
      {
        demoList.map(demo => {
          const { module, readme, filePath } = demo;
          
          return (
            <ComponentWrap
              module={module}
              readme={readme}
              codePath={filePath}
            />
          )
        })
      }
      { apiReadme && <MarkDown source={`## API ${apiReadme}`}/> }
    </>
  )
}

export default ComponentDoc;
