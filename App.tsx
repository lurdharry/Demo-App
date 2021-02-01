import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation";
import LoadAssets from "./src/hooks/loadResource";
import { QueryClientProvider, QueryClient } from "react-query";
import { AppProvider } from "./src/context/context";

const client = new QueryClient();

export default function App() {
  // load assetsa and fonts
  const isLoadingComplete = LoadAssets();

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
