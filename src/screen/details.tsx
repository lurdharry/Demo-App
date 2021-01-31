import React from "react";
import { View } from "react-native";
import { DetailScreenHeader, MediumText, RegularText } from "../shared";
import { DetailScreenProps } from "./types";
import { Button } from "../shared/button";
import { DetailStyles as styles } from "./styles";
import { getIconAndName } from "./utils";

export default function Detail({ navigation, route }: DetailScreenProps) {
  const detail = route.params?.event;
  const { icon, name } = getIconAndName(detail?.type, true);
  return (
    <View style={styles.container}>
      <DetailScreenHeader
        name="Gloria Thompson"
        onPress={() => navigation.pop()}
        icon={icon}
      />
      <MediumText title={name} style={styles.name} />
      <RegularText title="There have been abnormalities in their usual behaviour." />
      <View style={styles.bottomView}>
        <Button title="Visualise" style={styles.button} />
        <Button
          isGrey
          title="Acknowledge"
          onPress={() => console.log("sjsj")}
        />
      </View>
    </View>
  );
}
