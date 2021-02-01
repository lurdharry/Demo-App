import { Dimensions, Platform, PixelRatio, StatusBar } from "react-native";
import moment from "moment";

// Retrieve initial screen's width
export const screenWidth = Dimensions.get("window").width;

// Retrieve initial screen's height
export const screenHeight = Dimensions.get("window").height;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = (widthPercent: string) => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = (heightPercent: string) => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === "number"
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export { widthPercentageToDP, heightPercentageToDP };
//Asuming designs will be in dimensions 414 x 731 (for iPhonex) by default
export const hp = (height: number) => {
  return heightPercentageToDP(((height / 731) * 100).toString());
};

/**
 * correct calculation for resposive widths
 */
export const wp = (width: number) => {
  return widthPercentageToDP(((width / 414) * 100).toString());
};

export const paddingTopiOS = getStatusBarHeight();

export function getStatusBarHeight() {
  return Platform.select({
    ios: ifIphoneX(40, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

// //iPhoneX and StatusBar helpers
export function isIphoneX() {
  const dimen = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
}

export function ifIphoneX(iphoneXStyle: any, regularStyle: any) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export const formatDate = (date: string) => {
  return moment(date).calendar(null, {
    lastDay: "[Yesterday] HH:mm",
    sameDay: "[Today] HH:mm",
    nextDay: "[Tomorrow] HH:mm",
    lastWeek: "[last] dddd  HH:mm",
    nextWeek: "dddd  HH:mm",
    sameElse: "MMM Do YYYY, HH:mm",
  });
};
