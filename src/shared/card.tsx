import React, { ReactChild } from "react";
import {
  View,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { formatDate } from "./utils";
import { MediumText, RegularText } from "./text";
import { CardStyles as styles } from "./styles";

interface props extends TouchableOpacityProps {
  name: string;
  date: string;
  checked?: boolean;
  icon: ReactChild;
  style?: ViewStyle;
  onPress: () => void;
}

export const EventCard: React.FC<props> = ({
  name,
  date,
  checked,
  icon,
  style,
  onPress,
}) => {
  const Date = formatDate(date);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.card, checked && { opacity: 0.5 }, style]}
      onPress={onPress}
    >
      {icon}
      <View style={styles.left}>
        <MediumText title={name} style={styles.name} />
        <RegularText title={Date} style={styles.date} />
      </View>
    </TouchableOpacity>
  );
};
