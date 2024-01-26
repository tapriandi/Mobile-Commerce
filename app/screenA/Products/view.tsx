import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CardProduct, VirtualScrollView } from '../../components/Molecules';
import { ScreenAStackParams } from '../../navigator/types';
import { heightPercentage } from '../../utils/responsive';
import { IProduct } from '../../services/dummy/types';
import { BackIcon } from '../../assets/icons';
import { useDispatch } from 'react-redux';
import { setMode } from '../../services/landing/landingSlice';
import { COLORS } from '../../constant/colors';

type IProps = NativeStackScreenProps<ScreenAStackParams, 'Product'>;
type NavProps = IProps['navigation'];

interface ViewProps {
  navigation: NavProps;
  data: IProduct[];
  total: number | any;
  fetchMoreData: () => void;
}

const ViewComponent = ({ navigation, ...props }: ViewProps) => {
  const dispatch = useDispatch();
  const handleDetailProduct = (id: number) => {
    navigation.navigate('Product', { id });
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={{ height: heightPercentage('100%') }}>
        <View style={styles.header}>
          <Pressable onPress={() => dispatch(setMode(''))}>
            <BackIcon />
          </Pressable>
          <Text style={{ fontWeight: 'bold' }}>All Product</Text>
          <Text></Text>
        </View>

        <VirtualScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
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

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 14,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray200,
  },
  wrapper: {
    paddingHorizontal: '5%',
    paddingTop: 10,
    paddingBottom: '20%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
export default ViewComponent;
