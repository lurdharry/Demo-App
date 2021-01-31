import { StyleSheet } from "react-native";
import { hp, paddingTopiOS, wp } from "../shared";
import colors from "../constants/colors";

export const HomeStyles = StyleSheet.create({
  content: {
    paddingBottom: hp(50),
    paddingTop: hp(24),
  },
  listContainer: {
    backgroundColor: colors.main,
    flex: 1,
  },
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
    // lineHeight: hp(24),
  },
});

export const DetailStyles = StyleSheet.create({
  button: {
    marginBottom: hp(24),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: paddingTopiOS,
    alignItems: "center",
  },
  bottomView: {
    position: "absolute",
    bottom: hp(30),
  },
});
