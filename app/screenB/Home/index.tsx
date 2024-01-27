import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useGetAllProductApiQuery } from '../../services/dummy/dummyApi';
import { Event1, Event2, Event3, Event4 } from '../../assets/images';
import { BottomTabNavigatorParams } from '../../navigator/types';
import { ActivityIndicator, View } from 'react-native';
import { IProduct } from '../../services/dummy/types';
import {
  BeerIcon,
  DiscoLightIcon,
  KaraokeIcon,
  WineBottleIcon,
} from '../../assets/icons';
import ViewComponent from './view';

type IProps = NativeStackScreenProps<BottomTabNavigatorParams, 'Home'>;
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

  const bestPlace = [
    { title: 'Nightclub', icon: <DiscoLightIcon /> },
    { title: 'KTV', icon: <KaraokeIcon /> },
    { title: 'Pregames', icon: <WineBottleIcon /> },
    { title: 'Bar', icon: <BeerIcon /> },
  ];

  const newEvent = [
    { banner: Event1 },
    { banner: Event2 },
    { banner: Event3 },
    { banner: Event4 },
  ];

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
          newEvent={newEvent}
          bestPlace={bestPlace}
        />
      )}
    </>
  );
};
export default Products;
