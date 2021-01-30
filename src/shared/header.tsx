import React from "react";
import { View } from "react-native";
import { RegularText } from ".";
import { HeaderStyles as styles } from "./styles";

interface props {
  name: string;
}

export const Header: React.FC<props> = ({ name }) => (
  <View style={styles.header}>
    <RegularText title={name} style={styles.name} />
    <RegularText title="Events" style={styles.event} />
  </View>
);
