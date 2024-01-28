import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { COLORS } from '../../../constant/colors';

const ViewComp = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray900 }}>
      <View>
        <Text>lalal</Text>
      </View>
    </SafeAreaView>
  );
};
export default ViewComp;
