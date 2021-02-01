import * as React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";
import {
  createSharedElementStackNavigator,
  SharedElementsComponentConfig,
} from "react-navigation-shared-element";
import Home from "../screen/home";
import Detail from "../screen/details";

export type NavigationParamList = {
  Home: undefined;
  Detail: { event: { id: string; type: string; header?: string } };
};

const options: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
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
      align: "right-bottom",
      animation: "fade",
    },
    {
      id: "header",
      resize: "stretch",
      align: "center-top",
      animation: "fade",
    },
  ];
};

const RootStack = createSharedElementStackNavigator<NavigationParamList>();

export default function MainNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen
        name="Detail"
        component={Detail}
        options={options}
        sharedElementsConfig={SharedConfig}
      />
    </RootStack.Navigator>
  );
}
