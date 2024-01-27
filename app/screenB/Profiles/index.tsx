import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenBStackParams } from '../../navigator/types';
import { SafeAreaView, View, Text } from 'react-native';

type IProps = NativeStackScreenProps<ScreenBStackParams, 'Event'>;
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
}

const Index = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};
export default Index;
