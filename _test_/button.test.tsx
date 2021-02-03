import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import { Text } from "react-native";
import { Button } from "../src/shared/button";

describe("Button", () => {
  it("Button component renders correctly", () => {
    const text = "Login";
    const instance = renderer.create(<Button title={text} />);
    expect(instance).toMatchSnapshot();
  });
  it("Button component renders correctly after an update", () => {
    const value1 = "Hello";
    const value2 = "Hi";

    const instance = renderer.create(<Button title={value1} />);
    const textInstance = instance.root.findByType(Text);
    expect(textInstance.props.children).toBe(value1);

    instance.update(<Button title={value2} />);
    expect(textInstance.props.children).toBe(value2);
  });

  it("Button responds to onPress", () => {
    const mockFn = jest.fn();

    const { getByText } = render(<Button title="TEST" onPress={mockFn} />);

    fireEvent.press(getByText("TEST"));

    expect(mockFn).toBeCalled();
  });
});
