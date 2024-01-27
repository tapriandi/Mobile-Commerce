import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  BottomTabNavigatorParams,
  ScreenBStackParams,
} from '../../navigator/types';
import { View, Text } from 'react-native';

type IProps = NativeStackScreenProps<BottomTabNavigatorParams, 'Friends'>;
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
}

const Index = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Event</Text>
    </View>
  );
};
export default Index;
