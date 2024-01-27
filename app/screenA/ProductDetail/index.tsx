import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenAStackParams } from '../../navigator/types';
import {
  useGetAllProductApiQuery,
  useGetProductApiQuery,
} from '../../services/dummy/dummyApi';
import { IProduct } from '../../services/dummy/types';
import { ActivityIndicator, View } from 'react-native';
import ViewComp from './view';

type IProps = NativeStackScreenProps<ScreenAStackParams, 'Product'>;
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
  route: IProps['route'];
}

const Products = ({ navigation, route }: Props) => {

  const _id: number = route.params.id;
  const { data, isLoading } = useGetProductApiQuery(_id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  return (
    <>
      {isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <ViewComp
          navigation={navigation}
          data={data}
        />
      )}
    </>
  );
};

export default Products;
