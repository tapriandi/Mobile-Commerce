import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabNavigatorParams } from '../../navigator/types';
import ViewComp from './view';

type IProps = NativeStackScreenProps<BottomTabNavigatorParams, 'Friends'>;
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
}

const Index = ({ navigation }: Props) => {
  return <ViewComp />;
};
export default Index;
