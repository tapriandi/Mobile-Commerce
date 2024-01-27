import React, { ReactNode } from 'react';
import Modal from 'react-native-modal';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../constant/colors';
import { heightPercentage } from '../../../utils/responsive';

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
      propagateSwipe={true}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.center}>
          <View style={styles.line}></View>
        </View>
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  line: {
    height: 3,
    width: 50,
    marginTop: 20,
    borderRadius: 2,
    marginBottom: 5,
    backgroundColor: COLORS.gray400,
  },
});
export default Index;
