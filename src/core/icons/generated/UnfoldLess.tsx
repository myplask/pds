import React from "react";
import { SvgIconProps } from "../index";
export const UnfoldLess = React.memo<SvgIconProps>(
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
        <path d="M1.464 1.536L5 5.07l3.535-3.535M1.464 14.536L5 11l3.535 3.536" />
      </g>
    </svg>
  )
);
