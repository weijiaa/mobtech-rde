import React from 'react';
import Button from '../Button';

function Demo() {
  return (
    <>
      <Button disabled>默认样式</Button>
      <Button disabled type="primary">Primary Button</Button>
      <Button disabled type="danger">danger Button</Button>
      <Button disabled type="link">Primary link</Button>
    </>
  )
}

export default Demo;
