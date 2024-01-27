import LinearGradient from 'react-native-linear-gradient';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../../constant/colors';
import { FPercentage } from '../../../utils/responsive';

interface Props {
  title: string;
  onPress: () => void;
}
const ModalScanOntable = ({ title, onPress }: Props) => {
  return (
    <Pressable style={{ width: '100%' }} onPress={onPress}>
      <LinearGradient
        colors={[COLORS.purple2, COLORS.purple1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: FPercentage(3.5),
    padding: 14,
  },
  button: {
    width: '100%',
    height: 44,
    borderRadius: 5,
  },
});
export default ModalScanOntable;
