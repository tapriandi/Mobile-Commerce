import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenAStackParams } from '../../navigator/types';
import { useGetAllProductApiQuery } from '../../services/dummy/dummyApi';
import { IProduct } from '../../services/dummy/types';
import { ActivityIndicator, View } from 'react-native';
import ViewComponent from './view';

type IProps = NativeStackScreenProps<ScreenAStackParams, 'Product'>;
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
}

const Products = ({ navigation }: Props) => {
  const [data, setData] = useState<IProduct[]>([]);

  const { data: dataProducts, isLoading } = useGetAllProductApiQuery(
    { limit: 100 },
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    },
  );

  const fetchMoreData = async () => {
    if (dataProducts) {
      const newData = dataProducts?.products;
      if (data.length < dataProducts?.total) {
        const dataSlice = newData.slice(data.length, data.length + 8);
        setData(prevData => [...prevData, ...dataSlice]);
      }
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, [dataProducts]);

  return (
    <>
      {isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <ViewComponent
          navigation={navigation}
          data={data}
          total={dataProducts?.total}
          fetchMoreData={fetchMoreData}
        />
      )}
    </>
  );
};
export default Products;
