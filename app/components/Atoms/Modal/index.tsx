import React, { ReactNode } from 'react';
import Modal from 'react-native-modal';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../constant/colors';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Index = ({ children, isOpen, onClose }: Props) => {
  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={onClose}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.line}></View>
        {children}
      </View>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  wrapper: {
    backgroundColor: COLORS.gray800,
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 3,
    width: 80,
    marginBottom: 10,
    backgroundColor: COLORS.gray400,
  },
});
export default Index;
