import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import { wp, hp, paddingTopiOS } from "./layout";

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
  greyButton: {
    backgroundColor: colors.grey,

    borderWidth: hp(1),
    borderColor: colors.border,
  },
  title2: {
    color: colors.nobel,
  },
});

export const CardStyles = StyleSheet.create({
  touchItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  checked: {
    opacity: 0.4,
  },
  card: {
    width: wp(363),
    backgroundColor: colors.white,
    alignSelf: "center",
    padding: wp(16),
    borderRadius: hp(8),
    borderWidth: hp(2),
    borderColor: colors.border,
    marginBottom: hp(16),
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
    fontSize: hp(12),
  },
  event: {
    color: colors.nobel,
    fontSize: hp(16),
  },
  detailBox: {
    paddingBottom: hp(28),
    paddingHorizontal: wp(26),
    backgroundColor: colors.pablue,
    paddingTop: hp(8),
    alignItems: "center",
    width: "100%",
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(35),
    width: "100%",
  },
  nameBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  detailName: {
    color: colors.white,
    fontSize: hp(12),
    lineHeight: hp(18),
  },
  detailEvent: {
    color: colors.white,
  },
  empty: {
    height: hp(24),
    width: wp(24),
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
