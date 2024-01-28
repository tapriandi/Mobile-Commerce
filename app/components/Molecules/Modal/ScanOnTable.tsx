import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, Gap, Modal } from '../../Atoms';
import { COLORS } from '../../../constant/colors';
import { FPercentage } from '../../../utils/responsive';
import { ArrowLeftIcon } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenBStackParams } from '../../../navigator/types';

// type IProps = NativeStackScreenProps<ScreenBStackParams, 'TopTabNavigator'>;
// type NavProps = IProps['navigation'];

interface Props {
  isOpen: boolean;
  onClose: () => void;
  navigation?: any;
}

// ScreenBStackParams
const ModalScanOntable = ({ navigation, isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <View style={{ padding: 20 }}>
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
        <Button
          title="Gotcha"
          onPress={() => navigation.navigate('TopTabNavigator')} // this error error
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.orange,
    fontSize: FPercentage(4.5),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  desc: {
    paddingVertical: 20,
    color: COLORS.gray200,
    textAlign: 'center',
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
export default ModalScanOntable;
