import React, { useState } from 'react';
import { SideMenu, ComponentWrap, MarkDown } from '../../components'
import { importDir } from '../../utils';
import './index.less';

const dirTree = importDir(require.context( '../../../src/components', true, /\.(md|jsx?)$/));
const comps = [];
console.log(dirTree);

Object.keys(dirTree).forEach(key => {
  if(dirTree[key].demo === undefined) {
    return ;
  }

  const comp = dirTree[key];
  const name = key;
  const demoList = [];
  const module = comp['index.js']?.default;
  const readme = comp['index.md']?.default;
  const demoKeys = new Set();

  Object.keys(comp.demo).forEach(key => demoKeys.add(key.split('.')[0]));

  demoKeys.forEach(moduleName => {
    const module = comp.demo[`${moduleName}.js`]?.default;
    const readme = comp.demo[`${moduleName}.md`]?.default;
    const path = comp.demo[`${moduleName}.js`]?.path;

    demoList.push({
      name: moduleName,
      path,
      module,
      readme
    })
  });

  comps.push({
    name,
    demoList,
    module,
    readme
  })
});

console.log(comps);

function Components() {
  const [active, setActive] = useState(0);
  const { demoList, readme } = comps[active];
  const [compReadme, apiReadme] = readme.split('## API');

  return (
    <div className="app-components">
      <div className="app-components-left">
        <SideMenu active={active} onChange={v => setActive(v)}>
          {
            comps.map((item, idx) => <SideMenu.Item value={idx} label={item.name} />)
          }
        </SideMenu>
      </div>
      <div className="app-components-right">
        { <MarkDown source={compReadme}/> }
        { <MarkDown source="## 代码演示"/> }
        {
          demoList.map(demo => {
            const { module, readme } = demo;

            return (
              <ComponentWrap
                module={module}
                readme={readme}
              />
            )
          })
        }
        { <MarkDown source={`## API ${apiReadme}`}/> }
      </div>
    </div>
  )
}

export default Components;