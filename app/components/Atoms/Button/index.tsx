import LinearGradient from 'react-native-linear-gradient';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { COLORS } from '../../../constant/colors';
import { FPercentage } from '../../../utils/responsive';

interface Props {
  title: string;
  styles?: ViewStyle;
  onPress?: (e: any) => void;
}
const ModalScanOntable = ({ styles, title, onPress }: Props) => {
  return (
    <Pressable style={{ width: '100%' }} onPress={onPress}>
      <LinearGradient
        colors={[COLORS.purple2, COLORS.purple1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[styles, _styles.button]}>
        <Text style={_styles.title}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const _styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: FPercentage(3.6),
    padding: 12,
  },
  button: {
    width: '100%',
    height: 46,
  },
});
export default ModalScanOntable;
