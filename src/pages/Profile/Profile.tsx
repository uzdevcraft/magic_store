import React, { useState } from 'react';
import { Cell, List, Button, Avatar, Badge, Title, Text, Card, Switch } from '@telegram-apps/telegram-ui';
import {
  IconUser,
  IconShoppingBag,
  IconHeart,
  IconChevronRight,
  IconPackage,
  IconCreditCard,
  IconBell,
  IconShield,
  IconHelpCircle
} from '@tabler/icons-react';
import classes from './Profile.module.scss';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  joinDate: string;
  isVerified: boolean;
  memberLevel: 'bronze' | 'silver' | 'gold' | 'platinum';
}

interface Order {
  id: string;
  date: string;
  status: 'delivered' | 'processing' | 'shipped' | 'pending';
  total: number;
  items: number;
}

const Profile: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailMarketing, setEmailMarketing] = useState(false);

  // Mock user data
  const user: UserProfile = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    avatar: 'https://picsum.photos/seed/user-avatar/200/200.jpg',
    joinDate: 'January 2023',
    isVerified: true,
    memberLevel: 'gold'
  };

  // Mock orders data
  const orders: Order[] = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 299.99,
      items: 3
    },
    {
      id: 'ORD-002',
      date: '2024-01-20',
      status: 'processing',
      total: 189.99,
      items: 2
    },
    {
      id: 'ORD-003',
      date: '2024-01-25',
      status: 'shipped',
      total: 449.99,
      items: 5
    }
  ];

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'delivered':
        return '#10b981';
      case 'processing':
        return '#f59e0b';
      case 'shipped':
        return '#3b82f6';
      case 'pending':
        return '#6b7280';
      default:
        return '#6b7280';
    }
  };

  const getMemberLevelColor = (level: UserProfile['memberLevel']) => {
    switch (level) {
      case 'bronze':
        return '#cd7f32';
      case 'silver':
        return '#c0c0c0';
      case 'gold':
        return '#ffd700';
      case 'platinum':
        return '#e5e4e2';
      default:
        return '#6b7280';
    }
  };

  const OrderItem: React.FC<{ order: Order }> = ({ order }) => (
    <Cell
      className={classes.order_item}
      before={<IconPackage size={24} className={classes.order_icon} />}
      after={
        <div className={classes.order_status}>
          <Badge type="dot" style={{ backgroundColor: getStatusColor(order.status) }}>
            {order.status}
          </Badge>
        </div>
      }
      subtitle={`${order.items} items • $${order.total}`}
      description={`Order ${order.id}`}
      onClick={() => console.log('View order:', order.id)}
    >
      {order.date}
    </Cell>
  );

  const SettingItem: React.FC<{
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    onClick?: () => void;
    rightElement?: React.ReactNode;
  }> = ({ icon, title, subtitle, onClick, rightElement }) => (
    <Cell
      className={classes.setting_item}
      before={icon}
      after={rightElement || <IconChevronRight size={20} className={classes.chevron} />}
      subtitle={subtitle}
      onClick={onClick}
    >
      {title}
    </Cell>
  );

  return (
    <div className={classes.root}>
      {/* Profile Header */}
      <section className={classes.profile_section}>
        <Card className={classes.profile_card}>
          <div className={classes.profile_header}>
            <div className={classes.avatar_container}>
              <Avatar src={user.avatar} size={96} className={classes.avatar} />
              {user.isVerified && (
                <Badge className={classes.verified_badge} type="dot">
                  Verified
                </Badge>
              )}
            </div>

            <div className={classes.profile_info}>
              <Title className={classes.user_name} level="2">
                {user.name}
              </Title>
              {/* <Text className={classes.user_email}>{user.email}</Text> */}
              {/* <Text className={classes.user_phone}>{user.phone}</Text> */}

              <div className={classes.member_info}>
                <Badge
                  className={classes.member_badge}
                  type="number"
                  style={{ backgroundColor: getMemberLevelColor(user.memberLevel) }}
                >
                  {user.memberLevel.toUpperCase()} Member
                </Badge>
                {/* <Text className={classes.join_date}>Joined {user.joinDate}</Text> */}
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Stats Section */}
      <section className={classes.stats_section}>
        <div className={classes.stats_grid}>
          <Card className={classes.stat_card}>
            <div className={classes.stat_content}>
              <IconShoppingBag size={24} className={classes.stat_icon} />
              <div className={classes.stat_info}>
                <Title className={classes.stat_number} level="3">
                  24
                </Title>
                <Text className={classes.stat_label}>Total Orders</Text>
              </div>
            </div>
          </Card>

          <Card className={classes.stat_card}>
            <div className={classes.stat_content}>
              <IconHeart size={24} className={classes.stat_icon} />
              <div className={classes.stat_info}>
                <Title className={classes.stat_number} level="3">
                  156
                </Title>
                <Text className={classes.stat_label}>Wishlist</Text>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Orders */}
      <section className={classes.orders_section}>
        <Title className={classes.section_title} level="3">
          Recent Orders
        </Title>
        <List className={classes.orders_list}>
          {orders.map(order => (
            <OrderItem key={order.id} order={order} />
          ))}
        </List>
        <Button className={classes.view_all_button} mode="bezeled" onClick={() => console.log('View all orders')}>
          View All Orders
        </Button>
      </section>

      {/* Settings Section */}
      <section className={classes.settings_section}>
        <Title className={classes.section_title} level="3">
          Settings
        </Title>
        <List className={classes.settings_list}>
          <SettingItem
            icon={<IconUser size={24} className={classes.setting_icon} />}
            title="Edit Profile"
            subtitle="Update your personal information"
            onClick={() => console.log('Edit profile')}
          />

          <SettingItem
            icon={<IconBell size={24} className={classes.setting_icon} />}
            title="Notifications"
            subtitle="Manage your notification preferences"
            rightElement={
              <Switch checked={notificationsEnabled} onChange={e => setNotificationsEnabled(e.target.checked)} />
            }
          />

          <SettingItem
            icon={<IconCreditCard size={24} className={classes.setting_icon} />}
            title="Payment Methods"
            subtitle="Add or remove payment methods"
            onClick={() => console.log('Payment methods')}
          />

          <SettingItem
            icon={<IconShield size={24} className={classes.setting_icon} />}
            title="Privacy & Security"
            subtitle="Manage your privacy settings"
            onClick={() => console.log('Privacy settings')}
          />

          <SettingItem
            icon={<IconHelpCircle size={24} className={classes.setting_icon} />}
            title="Help & Support"
            subtitle="Get help with your account"
            onClick={() => console.log('Help & support')}
          />
        </List>
      </section>
    </div>
  );
};

export default Profile;
