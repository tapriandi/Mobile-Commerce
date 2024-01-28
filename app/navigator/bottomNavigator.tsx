// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorParams } from './types';
import { Events, Friends, Home, Orders, Profiles } from '../screenB';
import { BottomTabNavigator, ModalScanTable } from '../components/Molecules';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator<BottomTabNavigatorParams>();

function BottomTabNavigatorComponent() {
  const [showModalQr, setShowModalQr] = React.useState<boolean>(false);
  const navigation = useNavigation();

  return (
    <>
      <Tab.Navigator
        initialRouteName={'Home'}
        tabBar={props => (
          <BottomTabNavigator showModal={setShowModalQr} {...props} />
        )}>
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

      <ModalScanTable
        isOpen={showModalQr}
        navigation={navigation}
        onClose={() => setShowModalQr(false)}
      />
    </>
  );
}
export default BottomTabNavigatorComponent;
