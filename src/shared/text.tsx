import React from "react";
import { Text, TextStyle, TextProps } from "react-native";
import { TextStyles as styles } from "./styles";

interface Props extends TextProps {
  title: string;
  style?: TextStyle;
}

const RegularText: React.FC<Props> = ({ title, style, ...rest }) => (
  <Text style={[styles.RegularText, style]} {...rest}>
    {title}
  </Text>
);

const MediumText: React.FC<Props> = ({ title, style, ...rest }) => (
  <Text style={[styles.medium, style]} {...rest}>
    {title}
  </Text>
);

export { RegularText, MediumText };
