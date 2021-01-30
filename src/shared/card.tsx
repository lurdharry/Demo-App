import React, { ReactElement, ReactNode, ReactChild } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Heart } from "../../assets/svgs";
import { wp, hp } from "./utils";
import colors from "../constants/colors";
import { MediumText, RegularText } from "./text";
import { CardStyles as styles } from "./styles";

interface props {
  name?: string;
  date?: string;
  checked?: boolean;
  icon: ReactChild;
  style?: ViewStyle;
}

export const EventCard: React.FC<props> = ({
  name,
  date,
  checked,
  icon,
  style,
}) => (
  <View style={[styles.card, checked && { opacity: 0.5 }, style]}>
    {icon}
    <View style={styles.left}>
      <MediumText title="Abnormal activity" style={styles.name} />
      <RegularText title="Today 20:28" style={styles.date} />
    </View>
  </View>
);
