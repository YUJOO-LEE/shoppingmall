
import React from 'react';
import GlobalLayout from './pages/_layout'

const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicCartIndex = React.lazy(() => import('./pages/cart/index'));
const DynamicPaymentIndex = React.lazy(() => import('./pages/payment/index'));
const DynamicProductIndex = React.lazy(() => import('./pages/product/index'));
const DynamicProductId = React.lazy(() => import('./pages/product/[id]'));


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true},
      { path: '/cart', element: <DynamicCartIndex />, index: true},
      { path: '/payment', element: <DynamicPaymentIndex />, index: true},
      { path: '/product', element: <DynamicProductIndex />, index: true},
      { path: '/product/:id', element: <DynamicProductId />, },
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/cart' },
  { route: '/payment' },
  { route: '/product' },
  { route: '/product/:id' },
]
