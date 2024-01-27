import React, { useRef } from 'react';
import Swiper from 'react-native-swiper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import {
  Animated,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FPercentage,
  heightPercentage,
  widthPercentage,
} from '../../utils/responsive';
import { VirtualScrollView } from '../../components/Molecules';
import { BottomTabNavigatorParams, ScreenAStackParams } from '../../navigator/types';
import { BackIcon, BomberIcon, SearchIcon } from '../../assets/icons';
import { IProduct } from '../../services/dummy/types';
import { setMode } from '../../services/landing/landingSlice';
import { COLORS } from '../../constant/colors';
import { Banner } from '../../assets/images';
import { Gap, TextField } from '../../components/Atoms';

type IProps = NativeStackScreenProps<BottomTabNavigatorParams, 'Home'>;
type NavProps = IProps['navigation'];

interface ViewProps {
  navigation: NavProps;
  data: IProduct[];
  total: number | any;
  fetchMoreData: () => void;
  bestPlace: any;
  newEvent: any;
}

const ViewComponent = ({ navigation, ...props }: ViewProps) => {
  const dispatch = useDispatch();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');

  const animation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 40],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
    height: animatedValue.interpolate({
      inputRange: [0, 40],
      outputRange: [60, 0],
      extrapolate: 'clamp',
    }),
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.gray900 }}>
      <View style={{ height: heightPercentage('100%') }}>
        <View style={styles.header}>
          <Pressable onPress={() => dispatch(setMode(''))}>
            <BackIcon />
          </Pressable>
          <BomberIcon />
          <Text></Text>
        </View>

        <Animated.View style={animation}>
          <View style={{ paddingHorizontal: '4%' }}>
            <TextField
              full
              title="Confirm Password"
              placeholder="Search Party"
              suffix={
                <View style={{ position: 'absolute', right: 10 }}>
                  <SearchIcon />
                </View>
              }
            />
            <Gap height={15} />
          </View>
        </Animated.View>

        <ScrollView
          onScroll={e => {
            const offsetY = e.nativeEvent.contentOffset.y;
            scrollDirection.current =
              offsetY - lastOffsetY.current > 0 ? 'dowm' : 'up';
            lastOffsetY.current = offsetY;
            animatedValue.setValue(offsetY);
          }}
          onScrollEndDrag={() => {
            scrollViewRef.current?.scrollTo({
              y: scrollDirection.current === 'down' ? 100 : 0,
              animated: true,
            });
          }}>
          <>
            <Swiper loop={false} style={{ height: 360 }} autoplay>
              <Image source={Banner} style={{ width: '100%' }} />
              <Image source={Banner} style={{ width: '100%' }} />
            </Swiper>

            <View style={styles.wrapper}>
              <Gap height={10} />
              <Text style={styles.titleSection}>Find best place</Text>
              <View style={styles.bpWrapper}>
                {props.bestPlace.map((item: any, idx: number) => (
                  <Pressable style={styles.bpBtn} key={idx}>
                    {item.icon}
                    <Text style={styles.bpTitle}>{item.title}</Text>
                  </Pressable>
                ))}
              </View>

              <Gap height={30} />
              <Text style={styles.titleSection}>Newest event</Text>
              <Gap height={10} />
              <View>
                <FlatList
                  horizontal
                  data={props.newEvent}
                  renderItem={({ item, index }) => (
                    <Pressable style={{ marginLeft: index !== 0 ? 15 : 0 }}>
                      <Image source={item.banner} />
                    </Pressable>
                  )}
                />
              </View>
              <Gap height={30} />
            </View>
          </>
        </ScrollView>
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
  },
  wrapper: {
    paddingHorizontal: '4%',
    paddingTop: 10,
    paddingBottom: '20%',
  },
  titleSection: {
    color: COLORS.purple,
    fontWeight: 'bold',
    fontSize: FPercentage(4),
  },

  //bp - best pleace
  bpWrapper: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bpBtn: {
    width: widthPercentage('21%'),
    aspectRatio: '1/1',
    borderRadius: 10,
    paddingVertical: '4%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: COLORS.gray800,
  },
  bpTitle: {
    color: 'white',
    fontSize: FPercentage(4),
  },
});
export default ViewComponent;
