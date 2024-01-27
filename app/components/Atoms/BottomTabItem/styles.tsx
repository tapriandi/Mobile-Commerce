import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { heightPercentage, widthPercentage } from '../../../utils/responsive';

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
      // color: actived ? COLORS.PRIMARY : COLORS.DISABLED,
    },
    textTab: {
      textAlign: 'center',
      fontSize: 10,
      // color: actived ? COLORS.PRIMARY : COLORS.DISABLED,
      marginTop: 2,
    },
  });
