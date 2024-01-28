import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ViewComp from './view';
import { TopTabNavigatorParams } from '../../../navigator/types';

type IProps = NativeStackScreenProps<TopTabNavigatorParams, 'Gin'>;
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
}

const Index = ({ navigation }: Props) => {
  const [showAdditional, setShowAdditional] = useState(false);
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <ViewComp
      navigation={navigation}
      showAdditional={showAdditional}
      showCart={showCart}
      setShowCart={setShowCart}
      setShowAdditional={setShowAdditional}
    />
  );
};
export default Index;
