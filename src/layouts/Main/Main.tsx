import { Outlet } from 'react-router-dom';
import { Tabbar } from '@/components/Tabbar';

const MainLayout = () => {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <Tabbar />
    </div>
  );
};

export default MainLayout;
