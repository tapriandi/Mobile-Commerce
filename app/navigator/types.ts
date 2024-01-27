import { NavigatorScreenParams } from '@react-navigation/native';

export type BottomTabNavigatorParams = {
  Home: undefined;
  Event: undefined;
  Friends: undefined;
  Profile: undefined;
  Order: undefined;
};

export type ScreenAStackParams = {
  Products: undefined;
  Product: { id: number };
};

export type ScreenBStackParams = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabNavigatorParams>;
};

export type RootStackParams = {
  LandingStack: undefined;
  ScreenAStack: undefined;
  ScreenBStack: NavigatorScreenParams<ScreenBStackParams>;
};
