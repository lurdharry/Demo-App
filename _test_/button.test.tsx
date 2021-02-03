import React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";
import { Button } from "../src/shared/button";

describe("Button", () => {
  it("HeaderBar component renders correctly", () => {
    const text = "Incorrect Path";
    const instance = renderer.create(<Button title={text} />);
    expect(instance).toMatchSnapshot();
  });
  it("HeaderBar component renders correctly after an update", () => {
    const value1 = "Hello";
    const value2 = "Hi";

    const instance = renderer.create(<Button title={value1} />);
    const textInstance = instance.root.findByType(Text);
    expect(textInstance.props.children).toBe(value1);

    instance.update(<Button title={value2} />);
    expect(textInstance.props.children).toBe(value2);
  });
});
