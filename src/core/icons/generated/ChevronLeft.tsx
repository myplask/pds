import React from "react";
import { SvgIconProps } from "../index";
export const ChevronLeft = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path d="M14 8l-4 4 4 4" stroke={fillColor} />
    </svg>
  )
);
