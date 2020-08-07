import React, { createContext } from 'react';

const context = createContext('');
const Provider = context.Provider;

function HeadMenu(props) {
  const { children, active='' } = props;

  return (
    <Provider value={active}>
      <ul className="head-menu">{children}</ul>
    </Provider>
  )
}

export {
  context
}

export default HeadMenu;
