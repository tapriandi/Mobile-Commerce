import React, { useState, useEffect } from 'react';
import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Gap, TextField, TopTabItem } from '../../Atoms';
import { COLORS } from '../../../constant/colors';
import { ArrowLeftIcon, SearchIcon } from '../../../assets/icons';
import { FPercentage } from '../../../utils/responsive';

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
    <View style={{ backgroundColor: COLORS.gray900 }}>
      <View style={{ paddingHorizontal: '4%' }}>
        <View style={styles.titleWrap}>
          <Pressable onPress={() => navigation.navigate('BottomTabNavigator')}>
            <ArrowLeftIcon />
          </Pressable>
          <Text style={styles.title}>Omni Taiwan</Text>
        </View>

        <TextField
          full
          title="Confirm Password"
          placeholder="Search spirit"
          suffix={
            <View style={{ position: 'absolute', right: 10 }}>
              <SearchIcon />
            </View>
          }
        />
        <Gap height={10} />
      </View>

      <ScrollView horizontal style={styles.bottomTabContainer}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : route.name;
          const title =
            options.title !== undefined ? options.title : route.name;
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
            <TopTabItem
              key={`${index}_${title}`}
              label={label}
              onPress={onPress}
              onLongPress={onLongPress}
              actived={isFocused}
              name={title}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTabContainer: {
    zIndex: 8,
    backgroundColor: COLORS.gray900,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: FPercentage(4.2),
    paddingLeft: 20,
  },
});

export default MyTabBar;
