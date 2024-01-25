import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from './types';
import { Landing } from '../screenA';

const Stack = createStackNavigator<RootStackParams>();
const RootStack = () => {
  return (
   <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName='LandingStack'>
            <Stack.Screen
            name={'LandingStack'}
            component={Landing}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default RootStack