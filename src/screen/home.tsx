import React, { useContext, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Header, EventCard } from "../shared/index";
import { StatusBar } from "expo-status-bar";
import { Loadevents } from "../hooks/loadevents";
import { Eventdata, HomeScreenProps } from "./types";
import { getIconAndName } from "./utils";
import { HomeStyles as styles } from "./styles";
import { AppContext } from "../context/context";

export default function Home({ navigation }: HomeScreenProps) {
  const { state, dispatch } = useContext(AppContext);
  const { Data, status } = Loadevents();

  useEffect(() => {
    dispatch({
      type: "FETCH",
      payload: {
        status: status,
        EventList: Data,
      },
    });
  }, [status, Data]);

  const _renderItem = ({ item }: { item: Eventdata }) => {
    const { name, icon } = getIconAndName(item.type);
    return (
      <EventCard
        icon={icon}
        name={name}
        date={item.date}
        checked={item.checked}
        onPress={() => navigation.navigate("Detail", { event: item })}
      />
    );
  };
  return (
    <>
      <StatusBar backgroundColor="#DDDDDD" style="light" />
      <View style={styles.container}>
        <Header name="Gloria Thompson" />
        {state.status === "loading" && (
          <ActivityIndicator style={{ flex: 1 }} size="large" color="red" />
        )}
        {state.EventList && (
          <FlatList
            style={styles.listContainer}
            contentContainerStyle={styles.content}
            data={state.EventList}
            renderItem={_renderItem}
            keyExtractor={item => item.eventId}
            extraData={state}
          />
        )}
      </View>
    </>
  );
}
