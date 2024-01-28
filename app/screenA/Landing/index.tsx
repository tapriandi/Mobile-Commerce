import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RootStackParams, ScreenAStackParams } from '../../navigator/types';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { setMode } from '../../services/landing/landingSlice';
import { heightPercentage, widthPercentage } from '../../utils/responsive';
import { COLORS } from '../../constant/colors';
import { Gap } from '../../components/Atoms';

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
    <SafeAreaView style={[styles.container, styles.rowCenter]}>
      <Text style={styles.title}>Mobile Test Code</Text>
      <Gap height={40} />
      <View>
        <Pressable
          style={[styles.button, styles.rowCenter]}
          onPress={() => dispatch(setMode('task1'))}>
          <Text>Task 1</Text>
        </Pressable>
        <Gap height={30} />
        <Pressable
          style={[styles.button, styles.rowCenter]}
          onPress={() => dispatch(setMode('task2'))}>
          <Text>Task 2</Text>
        </Pressable>
      </View>
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
    color: 'black',
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: COLORS.gray100,
    shadowColor: COLORS.gray500,
    elevation: 6,
  },
});
export default Landing;
