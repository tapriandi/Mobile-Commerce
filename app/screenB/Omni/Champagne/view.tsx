import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { CardProductCategory, ModalCart } from '../../../components/Molecules';
import { TopTabNavigatorParams } from '../../../navigator/types';
import { Product1, Product2, Product3 } from '../../../assets/images';
import { COLORS } from '../../../constant/colors';
import { Button } from '../../../components/Atoms';

type IProps = NativeStackScreenProps<TopTabNavigatorParams, 'Champagne'>;
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
  showCart: boolean;
  setShowCart: (e: boolean) => void;
}

const ViewComp = ({ navigation, showCart, setShowCart }: Props) => {
  const cart = [
    {
      id: 1,
      title: 'Veuve Clicquot Brut Set x 6',
      price: '36,000',
      image: Product3,
      category: 'champagne',
    },
    {
      id: 2,
      title: 'Moët & Chandon Imperial Set',
      price: '36,000',
      image: Product2,
      category: 'champagne',
    },
    {
      id: 3,
      title: 'Dom Pérignon Vintage Set x 6',
      price: '36,000',
      image: Product1,
      category: 'champagne',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        {cart.map((item, idx) => (
          <CardProductCategory item={item} key={idx} />
        ))}
      </ScrollView>
      <Button title="View Cart" onPress={() => setShowCart(true)} />

      <ModalCart isOpen={showCart} onClose={() => setShowCart(false)} />
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
