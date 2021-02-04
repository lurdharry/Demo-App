import React, { useContext } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Header, EventCard } from "../shared/index";
import { StatusBar } from "expo-status-bar";
import { Loadevents } from "../hooks/loadevents";
import { Eventdata, HomeScreenProps } from "../types/types.d";
import { getIconAndName } from "./utils";
import { HomeStyles as styles } from "./styles";
import { AppContext } from "../context/context";
import colors from "../constants/colors";

export default function Home({ navigation }: HomeScreenProps) {
  const { status, Data } = Loadevents();

  const { state } = useContext(AppContext);

  const _renderItem = ({ item, index }: { item: Eventdata; index: number }) => {
    const { name, icon } = getIconAndName(item.type);
    return (
      <EventCard
        testId={`event-card-${index}`}
        id={item.eventId}
        icon={icon}
        name={name}
        date={item.date}
        checked={state.CheckedEvent.includes(item.eventId)}
        onPress={() =>
          navigation.navigate("Detail", {
            event: { id: item.eventId, type: item.type },
          })
        }
      />
    );
  };

  return (
    <>
      <StatusBar backgroundColor={colors.white} style="dark" />
      <View style={styles.container}>
        <Header name="Gloria Thompson" />
        {status === "loading" && (
          <ActivityIndicator style={{ flex: 1 }} size="large" color="red" />
        )}
        {Data && (
          <FlatList
            style={styles.listContainer}
            contentContainerStyle={styles.content}
            data={Data}
            renderItem={_renderItem}
            keyExtractor={item => item.eventId}
            extraData={Data}
          />
        )}
      </View>
    </>
  );
}
