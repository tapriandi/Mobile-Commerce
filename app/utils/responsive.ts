import { Dimensions, PixelRatio, StatusBar, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Responsive Height & Width

const widthPercentage = (widthPercent: any) => {
  // Parse string percentage input and convert it to number.
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

const heightPercentage = (heightPercent: any) => {
  // Parse string percentage input and convert it to number.
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

// Responsive Font

const checkOffset = (getWidth: any, getHeight: any) => {
  if (getWidth > getHeight) {
    return 0;
  }
  if (Platform.OS === 'ios') {
    return 78;
  }
  return StatusBar.currentHeight;
  // iPhone X style SafeAreaView size in portrait
};

const standardLength = width > height ? width : height;
const offset = checkOffset(width, height) ?? 0;

const deviceHeight = Platform.OS === 'android' ? standardLength - offset : standardLength;

const FPercentage = (percent: any) => {
  const heightPercent = (percent * width) / 100;
  return Math.round(heightPercent);
};

// guideline height for standard 5" device screen is 680
const FValue = (fontSize: any, standardScreenHeight = 680) => {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

export { widthPercentage, heightPercentage, FPercentage, FValue };
