import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { COLORS } from '../../../constant/colors';
import { FPercentage } from '../../../utils/responsive';

interface Props {
  title: string;
  styles?: ViewStyle;
  onPress?: () => void;
}
const ModalScanOntable = ({ styles, title, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={[_styles.button, styles]}>
      <Text style={_styles.title}>{title}</Text>
    </Pressable>
  );
};

const _styles = StyleSheet.create({
  button: {
    height: 36,
    borderRadius: 6,
    backgroundColor: COLORS.purple,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: FPercentage(3.8),
    padding: 7,
  },
});
export default ModalScanOntable;
