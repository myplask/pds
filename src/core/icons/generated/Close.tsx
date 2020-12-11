import React from "react";
import { SvgIconProps } from "../index";
export const Close = React.memo<SvgIconProps>(
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
        d="M6 6l12 12m0-12L6 18"
        stroke={fillColor}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
);
