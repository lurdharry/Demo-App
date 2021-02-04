import React, { ReactElement } from "react";
import {
  View,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { formatDate } from "./layout";
import { MediumText, RegularText } from "./text";
import { CardStyles as styles } from "./styles";
import { SharedElement } from "react-navigation-shared-element";

interface props extends TouchableOpacityProps {
  name: string;
  date: string;
  checked?: boolean;
  icon: ReactElement;
  style?: ViewStyle;
  id?: string;
  onPress: () => void;
  testId?: string;
}

export const EventCard: React.FC<props> = ({
  name,
  date,
  checked,
  icon,
  style,
  id,
  onPress,
  testId,
}) => {
  const Date = formatDate(date);
  return (
    <View
      style={[styles.card, checked && styles.checked, style]}
      testID={testId}
    >
      <TouchableOpacity
        style={styles.touchItem}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <SharedElement id={`item.${id}.icon`}>{icon}</SharedElement>

        <View style={styles.left}>
          <SharedElement id={`item.${id}.title`}>
            <MediumText title={name} style={styles.name} />
          </SharedElement>
          <RegularText title={Date} style={styles.date} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
