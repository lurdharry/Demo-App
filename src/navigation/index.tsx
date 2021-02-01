import * as React from "react";
import "react-native-gesture-handler";
import { StackNavigationOptions } from "@react-navigation/stack";
import {
  createSharedElementStackNavigator,
  SharedElementsComponentConfig,
} from "react-navigation-shared-element";
import Home from "../screen/home";
import Detail from "../screen/details";
import { NavigationParamList } from "./types";

const options: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: ({ current: { progress }, layouts }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const SharedConfig: SharedElementsComponentConfig = route => {
  const data = route.params;
  return [
    {
      id: data.event.id,
      resize: "stretch",
      align: "center-top",
      animation: "fade",
    },
    {
      id: "header",
      resize: "stretch",
      align: "center-top",
      animation: "fade-out",
    },
  ];
};

const RootStack = createSharedElementStackNavigator<NavigationParamList>();

export default function MainNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home" screenOptions={options}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen
        name="Detail"
        component={Detail}
        sharedElementsConfig={SharedConfig}
      />
    </RootStack.Navigator>
  );
}
