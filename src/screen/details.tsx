import React from "react";
import { View } from "react-native";
import { DetailScreenHeader, MediumText, RegularText } from "../shared";
import { DetailScreenProps } from "./types";
import { Button } from "../shared/button";
import { DetailStyles as styles } from "./styles";
import { getIconAndName } from "./utils";
import { StatusBar } from "expo-status-bar";
import colors from "../constants/colors";

export default function Detail({ navigation, route }: DetailScreenProps) {
  const detail = route.params?.event;
  const { icon, name } = getIconAndName(detail?.type, true);
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.statusBar} />
      <DetailScreenHeader
        name="Gloria Thompson"
        onPress={() => navigation.pop()}
        icon={icon}
      />
      <View style={styles.second}>
        <MediumText title={name} style={styles.name} />
        <RegularText
          title="There have been abnormalities in their usual behaviour."
          style={styles.subTitle}
        />
        <View style={styles.bottomView}>
          <Button title="Visualise" style={styles.button} />
          <Button
            isGrey
            title="Acknowledge"
            onPress={() => console.log("sjsj")}
          />
        </View>
      </View>
    </View>
  );
}
