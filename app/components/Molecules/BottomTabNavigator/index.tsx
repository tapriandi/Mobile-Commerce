import React, { useState, useEffect } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { heightPercentage, widthPercentage } from '../../../utils/responsive';
import { BottomTabItem } from '../../Atoms';

function MyTabBar({ state, descriptors, navigation }: any) {
  const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);

  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);
  return (
    <View style={[styles.bottomTabContainer, keyboardStatus ? styles.hide : styles.show]}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const title = options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BottomTabItem
            key={`${index}_${title}`}
            label={label}
            onPress={onPress}
            onLongPress={onLongPress}
            actived={isFocused}
            name={title}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTabContainer: {
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    width: '100%',
    zIndex: 8,
    flexDirection: 'row',
    paddingHorizontal: widthPercentage('10%'),
    paddingVertical: heightPercentage('1.5%'),
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'flex',
  },
});

export default MyTabBar;
