import { StyleSheet } from "react-native";
import { hp, paddingTopiOS, wp, screenWidth } from "../shared";
import colors from "../constants/colors";

export const HomeStyles = StyleSheet.create({
  spinner: { flex: 1 },
  content: {
    paddingBottom: hp(50),
    paddingTop: hp(24),
  },
  listContainer: {
    backgroundColor: colors.main,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: paddingTopiOS,
  },
});

export const DetailStyles = StyleSheet.create({
  button: {
    marginBottom: hp(24),
  },
  container: {
    flex: 1,
    backgroundColor: colors.pablue,
    paddingTop: paddingTopiOS,
    alignItems: "center",
  },
  second: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    width: screenWidth,
  },
  bottomView: {
    position: "absolute",
    bottom: hp(30),
  },
  name: {
    marginTop: hp(30),
    marginBottom: wp(16),
    fontSize: hp(22),
    lineHeight: hp(34),
    color: colors.nobel,
  },
  subTitle: {
    textAlign: "center",
    width: wp(307),
    color: colors.nobel,
  },
});
