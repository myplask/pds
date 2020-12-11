import React from "react";
import { SvgIconProps } from "../index";
export const ChevronDown = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M9 1L5 5 1 1"
        stroke={fillColor}
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  )
);
