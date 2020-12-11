import React from "react";
import { SvgIconProps } from "../index";
export const CheckSquareChecked = React.memo<SvgIconProps>(
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
      <path
        d="M9.263 12.042l1.912 2.21 3.458-4.573"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
