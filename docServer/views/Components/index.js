import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SideMenuRoute from './SideMenuRoute';
import ComponentDoc from './ComponentDoc';
import Overview from './Overview';
import { importDir } from '../../utils';
import './index.less';

const dirTree = COMPONENTS_PATHS ? importDir(require.context(COMPONENTS_PATHS || '', !!COMPONENTS_PATHS, /\.(md|jsx?)$/), COMPONENTS_PATHS) : {};
const comps = [];

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
    const filePath = comp.demo[`${moduleName}.js`]?.path;

    demoList.push({
      name: moduleName,
      filePath,
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

function Components() {

  return (
    <div className="app-components">
      <div className="app-components-left">
        <SideMenuRoute router={comps} />
      </div>
      <div className="app-components-right">
        <Switch>
          <Route exact path={'/components/overview'} component={() => <Overview comps={comps || []} />} />
          {
            comps.map((comp, idx) => {
              const { demoList, readme } = comps[idx];

              return (
                <Route
                  exact
                  path={'/components/'+comp.name}
                  component={() => <ComponentDoc demoList={demoList} readme={readme} />}
                />
              );
            })
          }
          <Redirect from="/components" to="/components/overview" />
        </Switch>
      </div>
    </div>
  )
}

export default Components;
