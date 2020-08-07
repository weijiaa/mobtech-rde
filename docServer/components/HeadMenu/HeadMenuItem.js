import React, { useContext } from 'react';
import { context } from './HeadMenu';

function HeadMenuItem(props) {
  const { label, value } = props;
  const active = useContext(context);

  return (
    <li className={`head-menu-item${active === value ? ' active-item' : ''}`}>{label}</li>
  )
}

export default HeadMenuItem;
