import { IconSettings, IconUser, type Icon as IconType } from '@tabler/icons-react';

export type ActionsType = {
  id: string;
  icon: IconType;
  ariaLabel?: string;
  onClick: () => void;
};

export const defaultActions: ActionsType[] = [
  {
    id: 'profile',
    icon: IconUser,
    onClick: () => console.log('Profile clicked'),
    ariaLabel: 'Profile'
  },
  {
    id: 'settings',
    icon: IconSettings,
    onClick: () => console.log('Settings clicked'),
    ariaLabel: 'Settings'
  }
];
