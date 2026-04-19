import { Tabbar } from '@/components/Tabbar';

import classes from './Test.module.scss';
import { Home } from '@/pages/Home';

const Test = () => {
  return (
    <main className={classes.main}>
      <Home />
      <Tabbar />
    </main>
  );
};

export default Test;
