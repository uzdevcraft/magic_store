import { useMemo } from 'react';
import { Providers } from '@/containers';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import getRoutesData from './router';

const App = () => {
  const routes = getRoutesData();

  const router = useMemo(() => {
    return createBrowserRouter(routes);
  }, [routes]);

  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};

export default App;
