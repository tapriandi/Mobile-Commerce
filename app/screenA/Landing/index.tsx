import React from 'react'
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { RootStackParams, ScreenAStackParams } from '../../navigator/types';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

type IProps = CompositeScreenProps<
  StackScreenProps<RootStackParams,'LandingStack'>,
  StackScreenProps<ScreenAStackParams,'Products'>
>
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
}

const Landing = ({navigation}:Props) =>{
  return (
    <SafeAreaView>
        <View>
            <Text>landing</Text>
            <Pressable onPress={() => navigation.navigate('Products')}>
                <Text>Task 1</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}
export default Landing;