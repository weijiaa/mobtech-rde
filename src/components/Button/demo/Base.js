import React from 'react';
import Button from '../Button';

function Demo() {
  return (
    <>
      <Button>默认样式</Button> 
      <Button type="primary">Primary Button</Button>
      <Button type="danger">danger Button</Button>
      <Button type="link">Primary link</Button>
    </>
  )
}

export default Demo;
