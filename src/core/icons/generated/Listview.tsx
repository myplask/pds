import React from "react";
import { SvgIconProps } from "../index";
export const Listview = React.memo<SvgIconProps>(
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
        stroke={fillColor}
        strokeLinecap="round"
        d="M6.5 7.5h11M9.5 10.5h8M6.5 13.5h11M9.5 16.5h8"
      />
    </svg>
  )
);
