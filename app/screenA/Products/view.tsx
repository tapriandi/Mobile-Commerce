import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { CardProduct, VirtualScrollView } from '../../components/Molecules';
import { ScreenAStackParams } from '../../navigator/types';
import { heightPercentage } from '../../utils/responsive';
import { IProduct } from '../../services/dummy/types';

type IProps = NativeStackScreenProps<ScreenAStackParams, 'Products'>;
type NavProps = IProps['navigation'];

interface ViewProps {
  navigation: NavProps;
  data: IProduct[];
  total: number | any;
  fetchMoreData: () => void;
}

const ViewComponent = ({ navigation, ...props }: ViewProps) => {
  const handleDetailProduct = (id: number) => {
    console.log('--->', id);
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View
        style={{ height: heightPercentage('100%'), paddingHorizontal: '5%' }}>
        <View style={{ paddingVertical: 15 }}>
          <Text style={{ fontWeight: 'bold' }}>All Product</Text>
        </View>
        <VirtualScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}>
          <View style={{ paddingBottom: '15%' }}>
            <FlatList
              data={props.data}
              numColumns={2}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <CardProduct
                  data={item}
                  onPressCard={() => handleDetailProduct(item.id)}
                />
              )}
              onEndReached={props.fetchMoreData}
              onEndReachedThreshold={0.1}
              ListFooterComponent={() =>
                props.total > props.data.length && <ActivityIndicator />
              }
            />
          </View>
        </VirtualScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ViewComponent;
