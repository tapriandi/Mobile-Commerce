import React, { FC } from 'react';
import { Text, Pressable } from 'react-native';
import { style } from './styles';
import {
  CommunityActiveIcon,
  CommunityIcon,
  FlareActiveIcon,
  FlareIcon,
  HalfMoonActiveIcon,
  HalfMoonIcon,
  QrCodeActiveIcon,
  QrCodeIcon,
  UserActiveIcon,
  UserIcon,
} from '../../../assets/icons';

interface ComponentProps {
  onPress: () => void;
  onLongPress: () => void;
  label: string;
  actived: boolean;
  name: string;
}

const Icon = ({ name, actived }: any) => {
  switch (name) {
    case 'Home':
      return actived ? <HalfMoonActiveIcon /> : <HalfMoonIcon />;
    case 'Event':
      return actived ? <FlareActiveIcon /> : <FlareIcon />;
    case 'Friends':
      return actived ? <CommunityActiveIcon /> : <CommunityIcon />;
    case 'Profile':
      return actived ? <UserActiveIcon /> : <UserIcon />;
    case 'Order':
      return actived ? <QrCodeActiveIcon /> : <QrCodeIcon />;
    default:
      return <HalfMoonIcon />;
  }
};

const TabItem: FC<ComponentProps> = ({
  onPress,
  onLongPress,
  label,
  actived,
  name,
}) => {
  const styles = style(actived);
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon name={name} actived={actived} />
      <Text numberOfLines={2} style={styles.textTab}>
        {label}
      </Text>
    </Pressable>
  );
};

export default TabItem;
