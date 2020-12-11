import React from "react";
import { SvgIconProps } from "../index";
export const UnfoldLess = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M8.464 5.536L12 9.07l3.536-3.535M8.464 18.535L12 15l3.536 3.535"
        stroke={fillColor}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
);
