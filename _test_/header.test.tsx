import React from "react";
import renderer from "react-test-renderer";
import { View } from "react-native";
import { Header, DetailScreenHeader } from "../src/shared/header";

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

describe("Header", () => {
  const text = "Jack Dorsey";
  const mockFn = jest.fn();

  it("HeaderBar component renders correctly", () => {
    const instance = renderer.create(<Header name={text} />);
    expect(instance).toMatchSnapshot();
  });

  it("DetailHeader component renders correctly", () => {
    const instance = renderer.create(
      <DetailScreenHeader
        name={text}
        icon={<View />}
        id="header"
        onPress={mockFn}
      />
    );
    expect(instance).toMatchSnapshot();
  });
});
