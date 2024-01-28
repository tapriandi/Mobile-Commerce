import React from 'react';
import { View, FlatList } from 'react-native';
import { COLORS } from '../../../constant/colors';

const Products = () => {
  return (
    <View style={{ padding: 15 }}>
      <FlatList
        data={[1, 1, 1, 1, 1]}
        numColumns={2}
        keyExtractor={(e, i) => 'dom' + i.toString()}
        renderItem={() => (
          <View
            style={{
              width: '46%',
              marginHorizontal: '1.6%',
              marginBottom: 10,
            }}>
            <View
              style={{
                width: '100%',
                aspectRatio: 1,
                margin: '2%',
                borderRadius: 6,
                backgroundColor: COLORS.gray100,
              }}></View>
            <View
              style={{
                width: '80%',
                height: 10,
                margin: '2%',
                borderRadius: 6,
                backgroundColor: COLORS.gray100,
              }}></View>
            <View
              style={{
                width: '60%',
                height: 10,
                margin: '2%',
                borderRadius: 6,
                backgroundColor: COLORS.gray100,
              }}></View>
          </View>
        )}
      />
    </View>
  );
};

export default Products;
