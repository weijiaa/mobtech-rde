import React from 'react';
import { withRouter } from 'react-router-dom';
import { SideMenu } from '../../components';

function SideMenuRoute(props) {
  const { router, location, history } = props;

  return (
    <SideMenu active={location.pathname} onChange={route => history.push(route)}>
      <SideMenu.Item value={`/components/overview`} label="组件预览" />
      {
        router.map(item => <SideMenu.Item value={`/components/${item.name}`} label={item.name} />)
      }
    </SideMenu>
  )
}

export default withRouter(SideMenuRoute);
