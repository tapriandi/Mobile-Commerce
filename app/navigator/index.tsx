import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  RootStackParams,
  ScreenAStackParams,
  ScreenBStackParams,
} from './types';
import { Landing, Products, ProductDetail } from '../screenA';
import { landingSelectors } from '../services/landing/landingSelector';
import BottomTabNavigatorComponent from './bottomNavigator';
import TopTabNavigatorComponent from './topNavigator';

const ScreenA = createStackNavigator<ScreenAStackParams>();
const ScreenAStack = () => {
  return (
    <ScreenA.Navigator initialRouteName="Products">
      <ScreenA.Screen
        name="Products"
        component={Products}
        options={{ headerShown: false }}
      />
      <ScreenA.Screen
        name="Product"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
    </ScreenA.Navigator>
  );
};

const ScreenB = createStackNavigator<ScreenBStackParams>();
const ScreenBStack = () => {
  return (
    <ScreenB.Navigator initialRouteName="BottomTabNavigator">
      <ScreenB.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigatorComponent}
        options={{ headerShown: false }}
      />
      <ScreenB.Screen
        name="TopTabNavigator"
        component={TopTabNavigatorComponent}
        options={{ headerShown: false }}
      />
    </ScreenB.Navigator>
  );
};

const Stack = createStackNavigator<RootStackParams>();
const RootStack = () => {
  const mode = useSelector(landingSelectors.modeState);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="LandingStack">
        {mode === '' ? (
          <Stack.Screen
            name={'LandingStack'}
            component={Landing}
            options={{ headerShown: false }}
          />
        ) : mode === 'task1' ? (
          <Stack.Screen
            name={'ScreenAStack'}
            component={ScreenAStack}
            options={{ headerShown: false }}
          />
        ) : mode === 'task2' ? (
          <Stack.Screen
            name={'ScreenBStack'}
            component={ScreenBStack}
            options={{ headerShown: false }}
          />
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
