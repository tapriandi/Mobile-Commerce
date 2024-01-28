import { NavigatorScreenParams } from '@react-navigation/native';

export type BottomTabNavigatorParams = {
  Home: undefined;
  Event: undefined;
  Friends: undefined;
  Profile: undefined;
  Order: undefined;
};

export type TopTabNavigatorParams = {
  Champagne: undefined;
  Gin: undefined;
  Vodka: undefined;
  Whiskey: undefined;
  Beer: undefined;
};

export type ScreenAStackParams = {
  Products: undefined;
  Product: { id: number };
};

export type ScreenBStackParams = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabNavigatorParams>;
  TopTabNavigator: NavigatorScreenParams<TopTabNavigatorParams>;
  Omni: undefined;
};

export type RootStackParams = {
  LandingStack: undefined;
  ScreenAStack: undefined;
  ScreenBStack: NavigatorScreenParams<ScreenBStackParams>;
};
