import React, { Suspense } from 'react';
import { Link, withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { HeadMenu } from '../components';
import router from '../router';
import './App.less';

function App(props) {
  const { location } = props;
  const { pathname } = location;

  return (
    <>
      <div className="app-head">
        <HeadMenu active={pathname}>
          {
            router.map(route => (
              <Link to={route.path}>
                <HeadMenu.Item value={'/'+route.path} label={route.name}/>
              </Link>
            ))
          }
        </HeadMenu>
      </div>
      <Suspense fallback={<span />}>
        <Switch>
          {
            router.map(route => (
              <Route exact path={'/'+route.path} component={route.component} />
            ))
          }
        </Switch>
        <Redirect from="*" to='/components' />
      </Suspense>
    </>
  )
}

export default withRouter(App);
