import React, { FC } from 'react';
import { Text, Pressable } from 'react-native';
import { style } from './styles';
import {
  CommunityIcon,
  FlareIcon,
  HalfMoonIcon,
  QrCodeIcon,
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
      return actived ? <HalfMoonIcon /> : <HalfMoonIcon />;
    case 'Event':
      return actived ? <FlareIcon /> : <FlareIcon />;
    case 'Friends':
      return actived ? <CommunityIcon /> : <CommunityIcon />;
    case 'Profile':
      return actived ? <UserIcon /> : <UserIcon />;
    case 'Order':
      return actived ? <QrCodeIcon /> : <QrCodeIcon />;
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
