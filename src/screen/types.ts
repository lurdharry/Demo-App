import { NavigationParamList } from "../navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export interface data {
  type: string;
  date: string;
  eventId: string;
  ack?: boolean;
}

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
