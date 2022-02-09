import React, { useMemo } from "react";
import { View } from "react-native";
import { DetailScreenHeader, MediumText, RegularText } from "../shared";
import { DetailScreenProps } from "../types/types.d";
import { Button } from "../shared/button";
import { DetailStyles as styles } from "./styles";
import { getIconAndName } from "./utils";
import { StatusBar } from "expo-status-bar";
import colors from "../constants/colors";
import { SharedElement } from "react-navigation-shared-element";
import { useEvents } from "../hooks/useEvents";

export default function Detail({ navigation, route }: DetailScreenProps) {
  // navigation props
  const { id, type } = route.params?.event;

  const { markEvent, checkedEventStatus } = useEvents();

  const isEventAcknowledged = useMemo(
    () => checkedEventStatus(id),
    [checkedEventStatus]
  );

  // icon and title handler
  const { icon, name } = getIconAndName(type, true);

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.pablue} />
      <DetailScreenHeader
        name="Gloria Thompson"
        onPress={() => navigation.pop()}
        icon={icon}
        id={`item.${id}.icon`}
      />
      <View style={styles.second}>
        <SharedElement id={`item.${id}.title`}>
          <MediumText title={name} style={styles.name} />
        </SharedElement>
        <RegularText
          title="There have been abnormalities in their usual behaviour."
          style={styles.subTitle}
        />
        <View style={styles.bottomView}>
          <Button title="Visualise" style={styles.button} />
          <Button
            isGrey
            title={isEventAcknowledged ? "Acknowledged" : "Acknowledge"}
            onPress={() => markEvent(id)}
          />
        </View>
      </View>
    </View>
  );
}
