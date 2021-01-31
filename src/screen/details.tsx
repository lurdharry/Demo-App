import React from "react";
import { View } from "react-native";
import { DetailScreenHeader } from "../shared";
import { DetailScreenProps } from "./types";
import { Button } from "../shared/button";
import { DetailStyles as styles } from "./styles";

export default function Detail({ navigation, route }: DetailScreenProps) {
  const detail = route.params?.event;
  return (
    <View style={styles.container}>
      <DetailScreenHeader
        name="Gloria Thompson"
        onPress={() => navigation.pop()}
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
  );
}
