// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorParams } from './types';
import { Events, Friends, Home, Orders, Profiles } from '../screenB';
import { BottomTabNavigator } from '../components/Molecules';

const Tab = createBottomTabNavigator<BottomTabNavigatorParams>();

function BottomTabNavigatorComponent() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBar={props => <BottomTabNavigator {...props} />}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarLabel: 'Nightlife',
          title: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'Event'}
        component={Events}
        options={{
          tabBarLabel: 'Event',
          title: 'Event',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'Friends'}
        component={Friends}
        options={{
          headerShown: false,
          tabBarLabel: 'Friends',
          title: 'Friends',
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profiles}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          title: 'Profile',
        }}
      />
      <Tab.Screen
        name={'Order'}
        component={Orders}
        options={{
          headerShown: false,
          tabBarLabel: 'Order',
          title: 'Order',
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigatorComponent;
