import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button, Counter, Gap, Modal } from '../../Atoms';
import { COLORS } from '../../../constant/colors';
import { FPercentage, widthPercentage } from '../../../utils/responsive';
import { Product2, Product3 } from '../../../assets/images';
import { DeleteIcon } from '../../../assets/icons';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const ModalScanOntable = ({ isOpen, onClose }: Props) => {
  const [counter, setCounter] = useState<number>(0);

  const cart = [
    {
      id: 1,
      title: 'Veuve Clicquot Brut Set x 6',
      titleU: '法國凱歌香檳 x 6',
      price: '36,000',
      image: Product3,
    },
    {
      id: 2,
      title: 'Moët & Chandon Imperial Set',
      titleU: '法國莫埃埃香檳 x 6',
      price: '36,000',
      image: Product2,
    },
    {
      id: 3,
      title: 'Veuve Clicquot Brut Set x 6',
      titleU: '法國凱歌香檳 x 6',
      price: '36,000',
      image: Product3,
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <View style={{ paddingHorizontal: 20 }}>
        <Gap height={10} />
        <Text style={styles.title}>Cart</Text>
        <Gap height={25} />
        <View style={styles.rowBetween}>
          <Text style={styles.white}>Total</Text>
          <Text
            style={[
              styles.white,
              { color: COLORS.purple, fontWeight: 'bold' },
            ]}>
            NT$ 165,000
          </Text>
        </View>
        <Gap height={15} />
        <ScrollView style={{ height: 520 }}>
          {cart.map((item, idx) => (
            <View style={styles.card} key={idx}>
              <Pressable style={styles.row}>
                <Image source={item.image} style={styles.cardImage} />
                <Gap width={16} />
                <View>
                  <Text style={styles.white}>{item.title}</Text>
                  <Text style={styles.white}>{item.titleU}</Text>
                  <Gap height={5} />
                  <Text style={styles.price}>NT$ {item.price}</Text>
                </View>
              </Pressable>
              <View style={[styles.rowBetween, styles.cardFoot]}>
                <DeleteIcon />
                <Counter counter={counter} setCounter={setCounter} />
              </View>
            </View>
          ))}
          <Gap height={40} />
        </ScrollView>
      </View>
      <Button
        title="Check out"
        onPress={() => console.log('lalla')}
        styles={styles.button}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  white: {
    color: 'white',
    fontSize: FPercentage(3.8),
  },
  title: {
    textAlign: 'center',
    color: COLORS.purple,
    fontSize: FPercentage(4.4),
    fontWeight: 'bold',
  },
  button: {
    width: widthPercentage('100%'),
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  //
  card: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: COLORS.gray700,
  },
  cardImage: {
    width: widthPercentage('30%'),
    aspectRatio: '1',
    objectFit: 'cover',
  },
  price: {
    color: COLORS.blue,
    fontWeight: 'bold',
    fontSize: FPercentage(3.2),
  },
  cardFoot: {
    marginTop: 15,
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray500,
  },
});
export default ModalScanOntable;
