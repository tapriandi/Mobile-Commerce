import React from 'react';
import Main from './navigator';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

 const App = () => {
  return (
    <SafeAreaView>
      <View>
            <Text>landing</Text>
            <Pressable>
                <Text>Task 1</Text>
            </Pressable>
            <Pressable>
                <Text>Task 2</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default App
