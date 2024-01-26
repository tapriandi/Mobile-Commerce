import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams, ScreenAStackParams } from './types';
import { Landing, Products, ProductDetail } from '../screenA';
import { useSelector } from 'react-redux';
import { landingSelectors } from '../services/landing/landingSelector';

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
            name={'ScreenAStack'}
            component={ScreenAStack}
            options={{ headerShown: false }}
          />
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
