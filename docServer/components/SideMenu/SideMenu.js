import React, { createContext } from 'react';

const context = createContext({value: '', onChange: () => {}});
const Provider = context.Provider;

function SideMenu(props) {
  const { children, active='', onChange=()=>{} } = props;

  return (
    <Provider value={{active, onChange}}>
      <ul className="side-menu">{children}</ul>
    </Provider>
  )
}

export {
  context
}

export default SideMenu;
