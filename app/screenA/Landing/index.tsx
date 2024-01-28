import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { RootStackParams, ScreenAStackParams } from '../../navigator/types';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { setMode } from '../../services/landing/landingSlice';
import { heightPercentage, widthPercentage } from '../../utils/responsive';
import { COLORS } from '../../constant/colors';
import { Gap } from '../../components/Atoms';
import { FireIcon, ProductIcon } from '../../assets/images';

type IProps = CompositeScreenProps<
  StackScreenProps<RootStackParams, 'LandingStack'>,
  StackScreenProps<ScreenAStackParams, 'Products'>
>;
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
}

const Landing = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <LinearGradient
        colors={[COLORS.purple2, COLORS.purple1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[styles.container, styles.rowCenter]}>
        <Text style={styles.title}>Mobile Test Code</Text>
        <Gap height={40} />
        <View>
          <Pressable
            style={[styles.button, styles.rowCenter]}
            onPress={() => dispatch(setMode('task1'))}>
            <Image source={ProductIcon} />
            <Text style={styles.titleBtn}>Task 1</Text>
          </Pressable>
          <Gap height={30} />
          <Pressable
            style={[styles.button, styles.rowCenter]}
            onPress={() => dispatch(setMode('task2'))}>
            <Image source={FireIcon} />
            <Text style={styles.titleBtn}>Task 2</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: widthPercentage('100%'),
    height: heightPercentage('100%'),
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  rowCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  titleBtn: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 5,
    fontWeight: 'bold',
    color: COLORS.purple,
  },
  button: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: COLORS.gray100,
    shadowColor: COLORS.gray500,
    elevation: 6,
  },
});
export default Landing;
