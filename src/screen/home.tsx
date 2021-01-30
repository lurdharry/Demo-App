import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import { paddingTopiOS, hp, wp, Header, EventCard } from "../shared/index";
import { StatusBar } from "expo-status-bar";
import { Button } from "../shared/button";
import { Heart } from "../../assets/svgs";

export default function Home() {
  return (
    <>
      <StatusBar backgroundColor="red" style="dark" />
      <View style={styles.container}>
        <Header name="Gloria Thompson" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
