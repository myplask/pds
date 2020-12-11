import React from "react";
import { SvgIconProps } from "../index";
export const Search = React.memo<SvgIconProps>(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10.5a4 4 0 11-8 0 4 4 0 018 0zm-1.232 4.165a5 5 0 11.992-.868.746.746 0 01.27.173l3 3a.75.75 0 11-1.06 1.06l-3-3a.746.746 0 01-.202-.365z"
        fill={fillColor}
      />
    </svg>
  )
);
