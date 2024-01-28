import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import {
  CardProductCategory,
  ModalAdditional,
} from '../../../components/Molecules';
import { TopTabNavigatorParams } from '../../../navigator/types';
import { Product4, Product5 } from '../../../assets/images';
import { COLORS } from '../../../constant/colors';
import { Button } from '../../../components/Atoms';

type IProps = NativeStackScreenProps<TopTabNavigatorParams, 'Gin'>;
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
  showAdditional: boolean;
  setShowAdditional: (e: boolean) => void;
}

const ViewComp = ({ showAdditional, setShowAdditional }: Props) => {
  const gins = [
    {
      id: 1,
      title: 'Blue dragon gin',
      price: '36,000',
      image: Product5,
      category: 'gin',
    },
    {
      id: 2,
      title: 'Monchery bloody marry',
      price: '36,000',
      image: Product4,
      category: 'gin',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        {gins.map((item, idx) => (
          <CardProductCategory
            item={item}
            key={idx}
            onPressAdd={setShowAdditional}
          />
        ))}
      </ScrollView>

      <ModalAdditional
        isOpen={showAdditional}
        onClose={() => setShowAdditional(false)}
      />
      <Button title="View Cart" onPress={() => console.log('lalla')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: COLORS.gray900,
  },
});
export default ViewComp;
