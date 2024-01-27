import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabNavigatorParams } from '../../navigator/types';
import { View, Text } from 'react-native';

type IProps = NativeStackScreenProps<BottomTabNavigatorParams, 'Profile'>;
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
}

const Index = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};
export default Index;
