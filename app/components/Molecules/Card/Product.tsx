import React from 'react';
import FastImage from 'react-native-fast-image';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constant/colors';
import { IProduct } from '../../../services/dummy/types';
import { discoutPrice } from '../../../utils/function';
import { StarIcon } from '../../../assets/icons';
import { Gap } from '../../Atoms';

interface Props {
  data: IProduct;
  onPressCard: (e: any) => void;
}

const CardProduct = ({ data, onPressCard }: Props) => {
  return (
    <TouchableOpacity style={styles.outer} onPress={onPressCard}>
      <View style={styles.card}>
        <FastImage
          source={{
            uri: data.thumbnail,
            priority: FastImage.priority.normal,
          }}
          style={styles.img}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.cardText}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.price}>${data.price}</Text>
          {data.discountPercentage && (
            <View style={styles.row}>
              <Text style={styles.discount}>
                ${discoutPrice(data.price, data.discountPercentage)}
              </Text>
              <Text style={styles.discountPercent}>
                {data.discountPercentage}%
              </Text>
            </View>
          )}
          <View style={styles.row}>
            <StarIcon />
            <Gap width={3} />
            <Text style={{ fontSize: 12 }}>{data.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  outer: {
    width: '50%',
    padding: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 230,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: COLORS.gray300,
    backgroundColor: 'white',
    shadowColor: COLORS.gray500,
    elevation: 6
  },
  cardText: {
    padding: 8,
  },
  title: {
    maxHeight: 36,
    color: 'black',
    overflow: 'hidden',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  img: {
    height: 150,
    width: 'auto',
    objectFit: 'cover',
  },
  discount: {
    paddingRight: 5,
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  discountPercent: {
    color: 'red',
    fontSize: 11,
    padding: 1,
    fontWeight: 'bold',
  },
});

export default CardProduct;
