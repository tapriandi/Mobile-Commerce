import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, Gap, Modal } from '../../Atoms';
import { COLORS } from '../../../constant/colors';
import { FPercentage, widthPercentage } from '../../../utils/responsive';
import { ArrowLeftIcon } from '../../../assets/icons';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const ModalScanOntable = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Pressable onPress={onClose} style={styles.arrow}>
        <ArrowLeftIcon />
      </Pressable>

      <View>
        <Text style={styles.title}>Scan on table</Text>
      </View>
      <Gap height={10} />
      <Text style={styles.desc}>
        Check your table or asking waiter to give you a QR Code, you can start
        order by scanning.
      </Text>
      <Button title="Gotcha" onPress={() => console.log('lalla')} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.orange,
    fontSize: FPercentage(4.5),
    fontWeight: 'bold',
  },
  desc: {
    paddingVertical: 20,
    color: COLORS.gray200,
    textAlign: 'center',
  },
  arrow: {
    position: 'absolute',
    top: 35,
    left: 20,
  },
});
export default ModalScanOntable;
