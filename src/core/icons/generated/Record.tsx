import React from "react";
import { SvgIconProps } from "../index";
export const Record = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <circle cx={6} cy={6} r={6} fill={fillColor} fillRule="nonzero" />
    </svg>
  )
);
