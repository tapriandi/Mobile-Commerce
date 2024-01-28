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

  return (
    <ViewComp
      navigation={navigation}
      showAdditional={showAdditional}
      setShowAdditional={setShowAdditional}
    />
  );
};
export default Index;
