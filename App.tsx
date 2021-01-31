import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation";
import LoadAssets from "./src/hooks/loadResource";
import { QueryClientProvider, QueryClient } from "react-query";
import { AppProvider } from "./src/context/context";

const client = new QueryClient();

export default function App() {
  const isLoadingComplete = LoadAssets();

  // const context = useContext(Ap);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppProvider>
        <QueryClientProvider client={client}>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </QueryClientProvider>
      </AppProvider>
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
