import React from "react";

import { Heart, AbnormalHeart, UpAtNight } from "../../assets/svgs";
import colors from "../constants/colors";

export const getIconAndName = (type: string, isdetail?: boolean) => {
  switch (type) {
    case "upAtNight":
      return {
        name: "Up at night",
        icon: (
          <UpAtNight
            height={isdetail ? "96" : undefined}
            color={isdetail ? colors.white : undefined}
          />
        ),
      };
    case "abornalActivity":
      return {
        name: "Abnormal activity",
        icon: (
          <AbnormalHeart
            height={isdetail ? "96" : undefined}
            color={isdetail ? colors.white : undefined}
          />
        ),
      };
    default:
      return {
        name: "Heart rate spike",
        icon: (
          <Heart
            height={isdetail ? "96" : undefined}
            color={isdetail ? colors.white : undefined}
          />
        ),
      };
  }
};
