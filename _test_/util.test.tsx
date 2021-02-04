import React from "react";
import { getIconAndName } from "../src/screen/utils";
import { Heart } from "../assets/svgs";

const response = {
  name: "Heart rate spike",
  icon: <Heart color="#FFFFFF" height="96" />,
};

const defaultResponse = {
  name: "Heart rate spike",
  icon: <Heart />,
};

describe("sum function", () => {
  it("should return default responne", () => {
    expect(getIconAndName("default", true)).toEqual(response);
  });

  it("should return default response if only one argument is supplied", () => {
    expect(getIconAndName("default")).toEqual(defaultResponse);
  });
});
