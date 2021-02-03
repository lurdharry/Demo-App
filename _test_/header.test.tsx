import React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";
import { Header, DetailScreenHeader } from "../src/shared/header";
import { RegularText } from "../src/shared";

jest.mock("react-native-shared-element", () => {
  const { View } = require("react-native");
  const SharedElement = (props: any) => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    // default: SharedElement,
    SharedElement: SharedElement,
  };
});

describe("Header", () => {
  it("HeaderBar component renders correctly", () => {
    const text = "Jack Dorsey";
    const instance = renderer.create(<Header name={text} />);
    expect(instance).toMatchSnapshot();
  });
});
