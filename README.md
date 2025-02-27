# React Native Bottom Sheet

# Screenshot

<img src="https://github.com/phyolinwai/rnbottomsheet/blob/main/screenshots/1.png?raw=true" width="300" height="580"> <img src="https://github.com/phyolinwai/rnbottomsheet/blob/main/screenshots/2.png?raw=true" width="300" height="580">

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

# App.tsx

```bash
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
```

# BottomSheet.tsx

```bash
import {Text, View, StyleSheet, Pressable, Modal} from 'react-native';

interface IBottomSheetProps {
  isShow: boolean;
  onClose: () => void;
}

const BottomSheet = (props: IBottomSheetProps) => {
  return (
    <Modal animationType="slide" visible={props.isShow}>
      <View style={styles.backdrop}>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>Bottom sheet</Text>
            <Pressable onPress={props.onClose}>
              <Text style={styles.titleTextStyle}>x</Text>
            </Pressable>
          </View>
          {/* <View style={styles.divider} /> */}
          <Text>Do it something</Text>
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheetContainer: {
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  titleContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  titleTextStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  divider: {
    height: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
```
