import React, { useContext } from "react";
import { View } from "react-native";
import { DetailScreenHeader, MediumText, RegularText } from "../shared";
import { DetailScreenProps } from "../types/types.d";
import { Button } from "../shared/button";
import { DetailStyles as styles } from "./styles";
import { getIconAndName } from "./utils";
import { StatusBar } from "expo-status-bar";
import colors from "../constants/colors";
import { AppContext } from "../context/context";
import { SharedElement } from "react-navigation-shared-element";

export default function Detail({ navigation, route }: DetailScreenProps) {
  const { dispatch, state } = useContext(AppContext);
  // navigation props
  const detail = route.params?.event;

  const isAck = state.CheckedEvent.includes(detail.id);

  // buttonAction
  const setAction = async () => {
    await dispatch({
      type: "SET_ACTIVE",
      payload: { id: detail.id },
    });
  };
  // icon and title handler
  const { icon, name } = getIconAndName(detail.type, true);

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.pablue} />
      <DetailScreenHeader
        name="Gloria Thompson"
        onPress={() => navigation.pop()}
        icon={icon}
        id={`item.${detail.id}.icon`}
      />
      <View style={styles.second}>
        <SharedElement id={`item.${detail.id}.title`}>
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
            title={isAck ? "Acknowledged" : "Acknowledge"}
            onPress={setAction}
          />
        </View>
      </View>
    </View>
  );
}
