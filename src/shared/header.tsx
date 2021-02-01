import React, { ReactChild } from "react";
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
  icon: ReactChild;
  id: string;
}

export const Header: React.FC<props> = ({ name }) => (
  <View style={styles.header}>
    <SharedElement id="header" style={{ alignItems: "center" }}>
      <RegularText title={name} style={styles.name} />
      <RegularText title="Events" style={styles.event} />
    </SharedElement>
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
      <SharedElement id="header">
        <View style={styles.nameBox}>
          <RegularText title={name} style={styles.detailName} />
          <MediumText title="Event" style={styles.detailEvent} />
        </View>
      </SharedElement>

      <View style={styles.empty} />
    </View>
    <SharedElement id={id}>{icon}</SharedElement>
  </View>
);
