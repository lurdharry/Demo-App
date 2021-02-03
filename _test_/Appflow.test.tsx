import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import { Text } from "react-native";
import { EventCard } from "../src/shared/card";
import Home from "../src/screen/home";

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

jest.mock("react-query", () => {
  const { View } = require("react-native");
  const useQuery = () => {
    return jest.fn();
  };
  return {
    __esModule: true,
    // default: SharedElement,
    SharedElement: useQuery,
  };
});

describe("App flow works correctly", () => {
  //   it("Button component renders correctly", () => {
  //     const text = "Login";
  //     const instance = renderer.create(<EventCard name={text} date="sksk" />);
  //     expect(instance).toMatchSnapshot();
  //   });

  //   it("Button component renders correctly after an update", () => {
  //     const value1 = "Hello";
  //     const value2 = "Hi";

  //     const instance = renderer.create(<EventCard name={value1} date="sksk" />);
  //     const textInstance = instance.root.findByType(Text);
  //     expect(textInstance.props.children).toBe(value1);

  //     instance.update(<EventCard name={value2} date="sksk" />);
  //     expect(textInstance.props.children).toBe(value2);
  //   });

  it("Button responds to onPress", () => {
    const mockFn = jest.fn();

    const { getByText } = render(
      <EventCard name="TEST" onPress={mockFn} date="sksk" />
    );

    fireEvent.press(getByText("TEST"));

    expect(mockFn).toBeCalled();
  });

  //   describe("Screen 1", () => {x
  //     it("navigates on button press", () => {
  //       const navigate = jest.fn();
  //       const { getByText } = render(<Home navigation={{ navigate }} />);
  //       fireEvent.press(getByText("Go to Screen 2"));
  //       expect(navigate).toHaveBeenCalledWith("Screen2");
  //     });
  //   });
});
