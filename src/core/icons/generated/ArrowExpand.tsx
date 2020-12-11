import React from "react";
import { SvgIconProps } from "../index";
export const ArrowExpand = React.memo<SvgIconProps>(
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
        <path d="M10 1h5v5M6 15H1v-5" />
      </g>
    </svg>
  )
);
