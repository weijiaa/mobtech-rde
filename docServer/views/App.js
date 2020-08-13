import React, { Suspense } from 'react';
import { Link, withRouter, Switch, Route, Redirect} from 'react-router-dom';
import { HeadMenu } from '../components';
import router from '../router';
import './App.less';

function HeadMenuRoute(props) {
  const { active } = props;

  return (
    <HeadMenu active={active}>
      {
        router.map(route => (
          <Link to={'/'+route.path}>
            <HeadMenu.Item value={route.path} label={route.name}/>
          </Link>
        ))
      }
    </HeadMenu>
  )
}

function App(props) {
  const { location } = props;
  const { pathname } = location;

  return (
    <>
      <div className="app-head">
        <HeadMenuRoute active={pathname.split('/')[1]}/>
      </div>
      <div className="app-content">
        <Suspense fallback={<span />}>
          <Switch>
            {
              router.map(route => (
                <Route path={'/'+route.path} component={route.component} />
              ))
            }
            <Redirect from="/" to="/components/overview" />
          </Switch>
        </Suspense>
      </div>
    </>
  )
}

export default withRouter(App);
