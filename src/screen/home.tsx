import React from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Header, EventCard } from "../shared/index";
import { StatusBar } from "expo-status-bar";
import { Loadevents } from "../hooks/loadevents";
import { data, HomeScreenProps } from "./types";
import { getIconAndName } from "./utils";
import { HomeStyles as styles } from "./styles";

export default function Home({ navigation }: HomeScreenProps) {
  const { data, isLoading } = Loadevents();

  const _renderItem = ({ item }: { item: data }) => {
    const { name, icon } = getIconAndName(item.type);
    return (
      <EventCard
        icon={icon}
        name={name}
        date={item.date}
        onPress={() => navigation.navigate("Detail", { event: item })}
      />
    );
  };
  return (
    <>
      <StatusBar backgroundColor="#DDDDDD" style="light" />
      <View style={styles.container}>
        <Header name="Gloria Thompson" />
        {isLoading && (
          <ActivityIndicator style={{ flex: 1 }} size="large" color="red" />
        )}
        {data && (
          <FlatList
            style={styles.listContainer}
            contentContainerStyle={styles.content}
            data={data}
            renderItem={_renderItem}
            keyExtractor={item => item.eventId}
          />
        )}
      </View>
    </>
  );
}
