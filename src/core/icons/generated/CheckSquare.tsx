import React from "react";
import { SvgIconProps } from "../index";
export const CheckSquare = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <rect x={6} y={6} width={12} height={12} rx={2} fill={fillColor} />
    </svg>
  )
);
