import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { RootStackParams } from '../../navigator/types';

type IProps = NativeStackScreenProps<RootStackParams, 'LandingStack'>
type NavProps = IProps['navigation'];

interface Props {
  navigation: NavProps;
}

const Landing = ({navigation}: Props) =>{
  return (
    <SafeAreaView>
        <View>
            <Text>landing</Text>
            <Pressable>
                <Text>landing</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}
export default Landing;