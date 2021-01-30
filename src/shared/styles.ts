import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import { wp, hp, paddingTopiOS } from "./utils";

export const ButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.purple,
    width: wp(363),
    alignItems: "center",
    justifyContent: "center",
    height: hp(48),
    alignSelf: "center",
    borderRadius: hp(4),
  },
  title: {
    color: colors.white,
    fontFamily: "roboto-medium",
  },
});

export const CardStyles = StyleSheet.create({
  card: {
    width: wp(363),
    backgroundColor: colors.white,
    alignSelf: "center",
    padding: wp(16),
    borderRadius: hp(8),
    borderWidth: wp(2),
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    marginLeft: wp(16),
    alignItems: "flex-start",
  },
  name: {
    fontSize: hp(14),
    color: colors.nobel,
    lineHeight: hp(24),
  },
  date: {
    fontSize: hp(12),
    color: colors.lynch,
    lineHeight: hp(18),
  },
});

export const HeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    paddingTop: paddingTopiOS,
  },
  header: {
    width: "100%",
    backgroundColor: colors.white,
    paddingVertical: hp(8),
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: colors.lynch,
  },
  event: {
    color: colors.nobel,
    fontSize: wp(16),
  },
});

export const TextStyles = StyleSheet.create({
  RegularText: {
    fontSize: hp(12),
    lineHeight: hp(18),
    color: colors.black,
    fontFamily: "roboto-regular",
  },

  medium: {
    fontSize: hp(12),
    lineHeight: hp(18),
    color: colors.black,
    fontFamily: "roboto-medium",
  },
});
