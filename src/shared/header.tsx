import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import { HeaderStyles as styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BackArrow, Heart } from "../../assets/svgs";
import { MediumText, RegularText } from "./text";
import colors from "../constants/colors";
import { SharedElement } from "react-navigation-shared-element";

interface props {
  name: string;
}

interface detailProps extends props {
  onPress: () => void;
  icon: ReactElement;
  id: string;
}

export const Header: React.FC<props> = ({ name }) => (
  <View style={styles.header}>
    <RegularText title={name} style={styles.name} />
    <RegularText title="Events" style={styles.event} />
  </View>
);

export const DetailScreenHeader: React.FC<detailProps> = ({
  name,
  onPress,
  icon,
  id,
}) => (
  <View style={styles.detailBox}>
    <View style={styles.headerTop}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <BackArrow />
      </TouchableOpacity>
      <View style={styles.nameBox}>
        <RegularText title={name} style={styles.detailName} />
        <MediumText title="Event" style={styles.detailEvent} />
      </View>
      <View style={styles.empty} />
    </View>
    <SharedElement id={id}>{icon}</SharedElement>
  </View>
);
