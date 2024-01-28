import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { VirtualScrollView } from '../../components/Molecules';
import { ScreenAStackParams } from '../../navigator/types';
import { heightPercentage } from '../../utils/responsive';
import { IProduct } from '../../services/dummy/types';
import { BackIcon, StarIcon } from '../../assets/icons';
import { Gap } from '../../components/Atoms';
import { discoutPrice } from '../../utils/function';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import { COLORS } from '../../constant/colors';

type IProps = NativeStackScreenProps<ScreenAStackParams, 'Product'>;
type NavProps = IProps['navigation'];

interface ViewProps {
  navigation: NavProps;
  data: IProduct | any;
}

const ViewComp = ({ navigation, data }: ViewProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={{ height: heightPercentage('100%') }}>
        <VirtualScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}>
          <View style={{ paddingBottom: '15%' }}>
            <Pressable onPress={() => navigation.goBack()} style={styles.back}>
              <BackIcon />
            </Pressable>

            <Swiper loop={false} style={{ height: 380 }} autoplay>
              {data.images.map((item: string, idx: number) => (
                <FastImage
                  key={idx}
                  source={{
                    uri: item,
                    priority: FastImage.priority.normal,
                  }}
                  style={{ height: '100%' }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              ))}
            </Swiper>

            <View style={{ padding: '5%' }}>
              <Text>{data.brand}</Text>
              <Text style={styles.title}>{data.title}</Text>
              <Gap height={'5%'} />

              <Text style={styles.price}>${data.price}</Text>
              <Gap height={'3%'} />
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
                <View style={styles.row}>
                  <Text>Stock: </Text>
                  <Text style={{ fontWeight: 'bold' }}>{data.stock}</Text>
                </View>
                <Gap width={3} />
                <Text> | </Text>
                <Gap width={3} />
                <View style={styles.row}>
                  <StarIcon />
                  <Gap width={3} />
                  <Text style={{ fontWeight: 'bold' }}>{data.rating}</Text>
                </View>
              </View>

              <Gap height={'10%'} />
              <Text>Description:</Text>
              <Gap height={'3%'} />
              <Text style={{ color: 'black' }}>{data.description}</Text>
            </View>
          </View>
        </VirtualScrollView>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    maxHeight: 36,
    color: 'black',
    overflow: 'hidden',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  img: {
    height: 150,
    width: 'auto',
    objectFit: 'cover',
  },
  discount: {
    paddingRight: 5,
    textDecorationLine: 'line-through',
  },
  discountPercent: {
    color: 'red',
    padding: 1,
    fontWeight: 'bold',
  },
  back: {
    backgroundColor: 'white',
    position: 'absolute',
    display: 'flex',
    top: 15,
    left: 15,
    width: 40,
    height: 40,
    zIndex: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.gray200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ViewComp;
