/*
 * @Author: lin@applippli.co.jp
 * @Date: 2025-02-27 14:29:41
 * @Last Modified by: lin@applippli.co.jp
 * @Last Modified time: 2025-02-27 14:55:16
 */

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
