import React from 'react';
import { MarkDown } from '../../components'
import md from '../../../README.md';

function Guide() {

  return (
    <div style={{width: 1280, margin: '0 auto'}}>
        <MarkDown source={md} />
    </div>
  )
}

export default Guide;
