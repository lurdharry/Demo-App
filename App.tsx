import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation";
import LoadAssets from "./src/hooks/loadResource";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

export default function App() {
  const isLoadingComplete = LoadAssets();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={client}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
