import React from "react";
import { SvgIconProps } from "../index";
export const ChevronLeft = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M5 1L1 5l4 4"
        stroke={fillColor}
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  )
);
