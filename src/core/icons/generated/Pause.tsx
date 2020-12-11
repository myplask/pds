import React from "react";
import { SvgIconProps } from "../index";
export const Pause = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <g fill={fillColor} fillRule="nonzero">
        <rect width={2} height={12} rx={1} />
        <rect x={6} width={2} height={12} rx={1} />
      </g>
    </svg>
  )
);
