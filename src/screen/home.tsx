import React from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Header, EventCard } from "../shared/index";
import { StatusBar } from "expo-status-bar";
import { useEvents } from "../hooks/useEvents";
import { Eventdata, HomeScreenProps } from "../types/types.d";
import { getIconAndName } from "./utils";
import { HomeStyles as styles } from "./styles";
import colors from "../constants/colors";

export default function Home({ navigation }: HomeScreenProps) {
  const { status, eventsData } = useEvents();

  const _renderItem = ({ item, index }: { item: Eventdata; index: number }) => {
    const { name, icon } = getIconAndName(item.type);
    return (
      <EventCard
        testId={`event-card-${index}`}
        id={item.eventId}
        icon={icon}
        name={name}
        date={item.date}
        checked={item.checked}
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
          <ActivityIndicator
            style={styles.spinner}
            size="large"
            color={colors.pablue}
          />
        )}
        {eventsData && (
          <FlatList
            style={styles.listContainer}
            contentContainerStyle={styles.content}
            data={eventsData}
            renderItem={_renderItem}
            keyExtractor={item => item.eventId}
            extraData={eventsData}
          />
        )}
      </View>
    </>
  );
}
