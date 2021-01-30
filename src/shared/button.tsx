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
}

export const Button: React.FC<props> = ({
  style,
  title,
  titleStyle,
  ...rest
}) => (
  <TouchableOpacity
    style={[styles.button, style]}
    activeOpacity={0.7}
    {...rest}
  >
    <Text style={[styles.title, titleStyle]}>{title}</Text>
  </TouchableOpacity>
);
