import React from 'react';

const Components = React.lazy(() => import('../views/Components/index.js'));
const Guide = React.lazy(() => import('../views/Guide/index.js'));

const router = [
  {
    name: '组件',
    path: 'components',
    component: Components
  },
  {
    name: '指南',
    path: 'guide',
    component: Guide
  }
];

export default router;
