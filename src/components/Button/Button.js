import React from 'react';

function Button(props) {
  const { type, size, children, disabled, ...other } = props;

  let sizeCls = '';
  let typeCls = '';

  switch(size) {
    case 'large': sizeCls = 'lg'; break;
    case 'small': sizeCls = 'sm'; break;
  }

  switch(type) {
    case 'primary': typeCls = 'primary'; break;
    case 'danger': typeCls = 'danger'; break;
    case 'link': typeCls = 'link'; break;
  }

  const className = [`${sizeCls}`, `${typeCls}`, disabled && 'disabled']
    .filter( v => !!v)
    .map(v => ` comp-btn-${v}`)
    .join('');

  return (
    <button className={`comp-btn${className}`} {...other}>{children}</button>
  )
}

export default Button;
