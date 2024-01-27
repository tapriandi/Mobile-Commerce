import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { MinIcon, PlusIcon } from '../../../assets/icons';
import { COLORS } from '../../../constant/colors';

const index = () => {
  const [counter, setCounter] = useState<number>(11);
  return (
    <View style={styles.card}>
      <Pressable
        style={styles.btn}
        onPress={() => counter > 0 && setCounter(counter - 1)}>
        <MinIcon />
      </Pressable>
      <Text style={styles.text}>{counter}</Text>
      <Pressable style={styles.btn} onPress={() => setCounter(counter + 1)}>
        <PlusIcon />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: COLORS.gray900,
  },
  text: {
    color: 'white',
    width: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    width: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default index;
