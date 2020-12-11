import React from "react";
import { SvgIconProps } from "../index";
export const ArrowShrink = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <g
        stroke={fillColor}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      >
        <path d="M15 6h-5V1M1 10h5v5" />
      </g>
    </svg>
  )
);
