import React from 'react';
import { type ActionsType, defaultActions } from './actions';

import clsx from 'clsx';
import classes from './Header.module.scss';
import { IconMenu } from '@tabler/icons-react';

interface HeaderProps {
  title?: string;
  actions?: ActionsType[];
}

const Header: React.FC<HeaderProps> = ({ title = '', actions }) => {
  const finalActions = actions || defaultActions;

  return (
    <header className={clsx(classes.header)}>
      <div className={classes.header_left}>
        <IconMenu className={classes.menu_btn} />
      </div>

      <h1 className={classes.header_title}>{title}</h1>

      <div className={classes.header_right}>
        {finalActions.map(({ icon: Icon, onClick, ariaLabel }, index) => (
          <button key={index} onClick={onClick} aria-label={ariaLabel} className={classes.action_button}>
            <Icon />
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
