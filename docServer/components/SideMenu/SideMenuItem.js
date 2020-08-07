import React, { useContext } from 'react';
import { context } from './SideMenu';

function SideMenuItem(props) {
  const { label, value } = props;
  const { active, onChange } = useContext(context);

  return (
    <li onClick={() => onChange(value)} className={`side-menu-item${active === value ? ' active-item' : ''}`}>{label}</li>
  )
}

export default SideMenuItem;
