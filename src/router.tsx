import { MainLayout } from '@/layouts';
import { RouteObject } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { Cart } from '@/pages/Cart';
import { Orders } from '@/pages/Orders';
import { Profile } from '@/pages/Profile';

const getRoutesData = (): RouteObject[] => [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
];

export default getRoutesData;
