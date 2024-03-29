import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ViewComp from './view';
import { TopTabNavigatorParams } from '../../../navigator/types';

type IProps = NativeStackScreenProps<TopTabNavigatorParams, 'Champagne'>;
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
}

const Index = ({ navigation }: Props) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  return (
    <ViewComp
      navigation={navigation}
      showCart={showCart}
      setShowCart={setShowCart}
    />
  );
};
export default Index;
