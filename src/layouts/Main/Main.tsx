import { Outlet } from 'react-router-dom';
import { Tabbar } from '@/components/Tabbar';
import { Header } from '@/layouts/Aspects/Header';

import classes from './Main.module.scss';

export default function MainLayout() {
  return (
    <div className={classes.container}>
      <Header title="Magic Store" />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Tabbar />
    </div>
  );
}
