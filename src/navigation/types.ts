import { NavigationParamList } from ".";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type Eventdata = {
  type: string;
  date: string;
  eventId: string;
  checked?: boolean;
};

type HomeScreenNavigationProp = StackNavigationProp<
  NavigationParamList,
  "Home"
>;

type DetailScreenNavigationProp = StackNavigationProp<
  NavigationParamList,
  "Detail"
>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

type DetailScreenRouteProp = RouteProp<NavigationParamList, "Detail">;

export type DetailScreenProps = {
  navigation: DetailScreenNavigationProp;
  route: DetailScreenRouteProp;
};
