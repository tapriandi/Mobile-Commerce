import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabNavigatorParams } from '../../navigator/types';
import { View, Text } from 'react-native';
import { COLORS } from '../../constant/colors';

type IProps = NativeStackScreenProps<BottomTabNavigatorParams, 'Friends'>;
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
}

const Index = ({ navigation }: Props) => {
  return (
    <View>
      <LinearGradient
        colors={[COLORS.purple2, COLORS.purple1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>
            Friends Screen
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Index;
