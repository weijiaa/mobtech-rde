import React from 'react';
import { Link } from 'react-router-dom';

function Overview(props) {
  const { comps=[] } = props;

  const Components = () => comps.map( comp => {
    const { name, module: Module } = comp;
    return (
      <li className="comp-overview-item">
        <p className="comp-overview-item-title">
          <Link to={`/components/${name}`}>
            {name}
          </Link>
        </p>
        <div className="comp-overview-item-body">
          <Module />
        </div>
      </li>
    )
  })

  return (
    <ul className="comp-overview">
      {
        comps.length !== 0
        ? <Components />
        : (
          <div>如何创建组件文档？ <Link to="/guide">指南</Link></div>
        )
      }
    </ul>
  )
}

export default Overview;
