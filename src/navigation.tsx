import * as React from "react";

import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import Home from "./screen/home";
import Detail from "./screen/details";
import { Eventdata } from "./screen/types";

export type NavigationParamList = {
  Home: undefined;
  Detail: { event: Eventdata };
};

const options: StackNavigationOptions = {
  headerShown: false,
};

const RootStack = createStackNavigator<NavigationParamList>();

export default function MainNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home" screenOptions={options}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Detail" component={Detail} />
    </RootStack.Navigator>
  );
}
