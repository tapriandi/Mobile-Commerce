import React, { FC } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { FPercentage } from '../../../utils/responsive';
import { COLORS } from '../../../constant/colors';

interface ComponentProps {
  onPress: () => void;
  onLongPress: () => void;
  label: string;
  actived: boolean;
  name: string;
}

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
      <Text numberOfLines={2} style={styles.textTab}>
        {label}
      </Text>
    </Pressable>
  );
};

const style = (actived?: boolean) =>
  StyleSheet.create({
    container: {
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    textTab: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: FPercentage(3.6),
      color: actived ? COLORS.purple : 'white',
      marginTop: 2,
      paddingVertical: 15,
      borderBottomWidth: 2,
      paddingHorizontal: 28,
      borderBottomColor: actived ? COLORS.purple : 'white',
    },
  });

export default TabItem;
