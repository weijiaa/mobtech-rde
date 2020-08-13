import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { SideMenu } from '../../components';

function SideMenuRoute(props) {
  const { router, location } = props;

  return (
    <SideMenu active={location.pathname} >
      <Link to={`/components/overview`}>
        <SideMenu.Item value={`/components/overview`} label="组件预览" />
      </Link>
      {
        
        router.map(item => (
          <Link to={`/components/${item.name}`}>
            <SideMenu.Item value={`/components/${item.name}`} label={item.name} />
          </Link>
        ))
      }
    </SideMenu>
  )
}

export default withRouter(SideMenuRoute);
