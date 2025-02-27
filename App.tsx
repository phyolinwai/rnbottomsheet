/*
 * @Author: lin@applippli.co.jp
 * @Date: 2025-02-27 14:21:52
 * @Last Modified by: lin@applippli.co.jp
 * @Last Modified time: 2025-02-27 14:50:25
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import BottomSheet from './BottomSheet';

function App(): React.JSX.Element {
  const [isShow, setShow] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.bottonContainer}
        onPress={() => setShow(!isShow)}>
        <Text style={styles.buttonTextStyle}>Lunch Modal</Text>
      </Pressable>
      <BottomSheet isShow={isShow} onClose={() => setShow(!isShow)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottonContainer: {
    paddingVertical: 10,
    backgroundColor: 'blue',
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
