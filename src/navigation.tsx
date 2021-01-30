import * as React from "react";

import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import Home from "./screen/home";
import Detail from "./screen/details";

type NavigationParamList = {
  Home: undefined;
  Detail: { userId: string };
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

// type DetailScreenNavigationProp = StackNavigationProp<
//   NavigationParamList,
//   "Detail"
// >;

// type DetailScreenRouteProp = RouteProp<NavigationParamList, "Detail">;

// type props = {
//   navigation: DetailScreenNavigationProp;
//   route: DetailScreenRouteProp;
// };
