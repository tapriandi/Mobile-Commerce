import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { FPercentage, heightPercentage, widthPercentage } from '../../../utils/responsive';
import { COLORS } from '../../../constant/colors';

type Style = {
  textTab: TextStyle;
  container: ViewStyle;
  icon: ImageStyle;
};

export const style = (actived?: boolean) =>
  StyleSheet.create<Style>({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      height: heightPercentage('5%'),
      width: widthPercentage('8%'),
      resizeMode: 'contain',
    },
    textTab: {
      textAlign: 'center',
      fontSize: FPercentage(3.4),
      color: actived ? COLORS.orange : 'white',
      marginTop: 2,
    },
  });
