import React from 'react';
import { Button } from '@/components/Button';
import { IconInbox } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Text } from '@telegram-apps/telegram-ui';
import type { TablerIcon } from '@tabler/icons-react';

import classes from './Placeholder.module.scss';

interface IProps {
  title: string;
  hasIcon?: boolean;
  icon?: TablerIcon;
  subtitle?: string;
  fullHeight?: boolean;
  externalLink?: string;
  internalLink?: string;
  buttonContent?: string;
  buttonOnClick?: () => void;
}

const Placeholder: React.FC<IProps> = ({
  title,
  subtitle,
  icon: Icon,
  hasIcon = true,
  externalLink = '',
  internalLink = '',
  fullHeight = false,
  buttonContent = '',
  buttonOnClick
}) => {
  const navigate = useNavigate();

  return (
    <div className={`${classes.empty_page} ${fullHeight && classes.full_height}`}>
      <div className={classes.container}>
        {hasIcon && (Icon ? <Icon className={classes.icon} /> : <IconInbox className={classes.icon} />)}

        <Text className={classes.title}>{title}</Text>
        {subtitle && <Text className={classes.subtitle}>{subtitle}</Text>}

        {buttonContent && !externalLink && !internalLink && <Button text={buttonContent} onClick={buttonOnClick} />}

        {buttonContent && externalLink && !internalLink && (
          <a href={externalLink} target="_blank" rel="noopener noreferrer">
            <Button text={buttonContent} onClick={buttonOnClick} mode="plain" />
          </a>
        )}

        {buttonContent && internalLink && !externalLink && (
          <Button text={buttonContent} onClick={() => navigate(internalLink)} />
        )}
      </div>
    </div>
  );
};

export default Placeholder;
