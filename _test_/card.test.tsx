import React from "react";
import renderer from "react-test-renderer";
import { EventCard } from "../src/shared/card";
import { View } from "react-native";

jest.mock("react-native-shared-element", () => {
  const { View } = require("react-native");
  const SharedElement = (props: any) => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    SharedElement: SharedElement,
  };
});

describe("<EvevtCard/>", () => {
  it("EvevtCard component renders correctly", () => {
    const press = jest.fn();
    const text = "Up at Night";
    const instance = renderer.create(
      <EventCard
        name={text}
        date="2021-01-20T14:56:41+00:90"
        icon={<View />}
        onPress={press}
      />
    );
    expect(instance).toMatchSnapshot();
  });
});
