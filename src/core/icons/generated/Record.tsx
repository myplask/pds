import React from "react";
import { SvgIconProps } from "../index";
export const Record = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <circle cx={12} cy={12} r={6} fill={fillColor} />
    </svg>
  )
);
