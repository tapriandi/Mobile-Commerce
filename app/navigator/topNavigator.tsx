// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import { TopTabNavigatorParams } from './types';
import { TopTabNavigator } from '../components/Molecules';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  OmniBeer,
  OmniChampagne,
  OmniGin,
  OmniVodka,
  OmniWhiskey,
} from '../screenB';

const Tab = createMaterialTopTabNavigator<TopTabNavigatorParams>();

function TopTabNavigatorComponent() {
  return (
    <Tab.Navigator
      initialRouteName={'Champagne'}
      tabBar={props => <TopTabNavigator {...props} />}>
      <Tab.Screen
        name={'Champagne'}
        component={OmniChampagne}
        options={{
          tabBarLabel: 'Champagne',
          title: 'Champagne',
        }}
      />
      <Tab.Screen
        name={'Gin'}
        component={OmniGin}
        options={{
          tabBarLabel: 'Gin',
          title: 'Gin',
        }}
      />
      <Tab.Screen
        name={'Vodka'}
        component={OmniVodka}
        options={{
          tabBarLabel: 'Vodka',
          title: 'Vodka',
        }}
      />
      <Tab.Screen
        name={'Whiskey'}
        component={OmniWhiskey}
        options={{
          tabBarLabel: 'Whiskey',
          title: 'Whiskey',
        }}
      />
      <Tab.Screen
        name={'Beer'}
        component={OmniBeer}
        options={{
          tabBarLabel: 'Beer',
          title: 'Beer',
        }}
      />
    </Tab.Navigator>
  );
}
export default TopTabNavigatorComponent;
