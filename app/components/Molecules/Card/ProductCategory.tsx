import React, { useState } from 'react';
import { Pressable, StyleSheet, View, Text, Image } from 'react-native';
import { FPercentage, widthPercentage } from '../../../utils/responsive';
import { Button2, Counter, Gap } from '../../Atoms';
import { COLORS } from '../../../constant/colors';

interface Props {
  item: any;
  onPressAdd?: (e: boolean) => void;
}
function ProductCategory({ item, onPressAdd }: Props) {
  const [counter, setCounter] = useState(0);
  const handleAddToCart = () => {
    if (item.category === 'gin') {
      onPressAdd(true);
    } else {
      setCounter(1);
    }
  };

  return (
    <View style={styles.card}>
      <Pressable style={styles.cardWrap}>
        <View>
          <Text style={styles.white}>{item.title}</Text>
          <Gap height={5} />
          <Text style={styles.price}>NT$ {item.price}</Text>
          <Gap height={10} />
          {counter === 0 ? (
            <Button2
              title="Add to cart"
              styles={{ width: 112 }}
              onPress={handleAddToCart}
            />
          ) : (
            <Counter
              styleCard={{ width: 112 }}
              counter={counter}
              setCounter={setCounter}
            />
          )}
        </View>
        <Gap width={16} />
        <Image source={item.image} style={styles.cardImage} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  white: {
    color: 'white',
    fontSize: FPercentage(3.8),
  },
  card: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: COLORS.gray700,
  },
  cardWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardImage: {
    width: widthPercentage('25%'),
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
export default ProductCategory;
