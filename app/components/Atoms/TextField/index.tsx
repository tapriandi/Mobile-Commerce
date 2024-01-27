import React, { ReactNode, memo } from 'react';
import {
  StyleSheet,
  TextStyle,
  View,
  TextInput,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import { FPercentage } from '../../../utils/responsive';
import { COLORS } from '../../../constant/colors';

interface Props {
  title?: string;
  style?: TextStyle;
  full?: boolean;
  value?: string;
  suffix?: ReactNode;
  disabled?: boolean;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: (e: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const TextField = (props: Props) => {
  const { style, title, ...sprops } = props;
  return (
    <View>
      <View style={[style, styles.fieldContainer]}>
        <TextInput
          value={sprops.value}
          onBlur={sprops.onBlur}
          placeholder={sprops.placeholder}
          keyboardType={sprops.keyboardType}
          onChangeText={sprops.onChangeText}
          placeholderTextColor={COLORS.gray400}
          secureTextEntry={sprops.secureTextEntry}
          style={[styles.inputCore, sprops.full && { width: '100%' }]}
        />
        {sprops.suffix && <>{sprops.suffix}</>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.gray500,
    backgroundColor: COLORS.gray800
  },
  inputCore: {
    height: 44,
    color: COLORS.gray300,
    fontSize: FPercentage(4),
    paddingHorizontal: 12,
  },
  inputTitle: {
    fontSize: FPercentage(3.5),
    fontWeight: 'bold',
  },
});

export default memo(TextField);
