import { useState } from 'react';
import { Tabbar } from '@telegram-apps/telegram-ui';
import { IconUser, IconHome, IconPackage, IconShoppingCart } from '@tabler/icons-react';

import cx from 'clsx';
import classes from './Tabbar.module.scss';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { id: '/', text: 'Home', Icon: IconHome },
  { id: 'orders', text: 'Orders', Icon: IconPackage },
  { id: 'cart', text: 'Cart', Icon: IconShoppingCart },
  { id: 'profile', text: 'Profile', Icon: IconUser }
].map(item => ({
  ...item,
  text: item.text.padEnd(12)
}));

const TabbarComponent = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const handleTabClick = (id: string) => {
    setCurrentTab(id);
    const tab = tabs.find(tab => tab.id === id);
    if (tab) navigate(`/${tab.id}`);
  };

  return (
    <Tabbar className={classes.tabbar}>
      {tabs.map(({ id, text, Icon }) => (
        <Tabbar.Item
          key={id}
          text={text}
          selected={id === currentTab}
          onClick={() => handleTabClick(id)}
          className={cx(classes.tab, { [classes.selected]: id === currentTab })}
        >
          <Icon />
        </Tabbar.Item>
      ))}
    </Tabbar>
  );
};

export default TabbarComponent;
