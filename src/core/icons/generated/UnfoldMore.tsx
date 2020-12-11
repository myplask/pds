import React from "react";
import { SvgIconProps } from "../index";
export const UnfoldMore = React.memo<SvgIconProps>(
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
        d="M8.464 8.036L12 4.5l3.536 3.536M8.464 16.071L12 19.607l3.536-3.536"
        stroke={fillColor}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
);
