import React from "react";
import {
  TouchableOpacityProps,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  Text,
} from "react-native";

import { ButtonStyles as styles } from "./styles";

interface props extends TouchableOpacityProps {
  title: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  isGrey?: boolean;
}

export const Button: React.FC<props> = ({
  style,
  title,
  titleStyle,
  isGrey,
  ...rest
}) => (
  <TouchableOpacity
    style={[styles.button, isGrey && styles.greyButton, style]}
    activeOpacity={0.7}
    {...rest}
  >
    <Text style={[styles.title, isGrey && styles.title2, titleStyle]}>
      {title}
    </Text>
  </TouchableOpacity>
);
