import React from "react";
import { SvgIconProps } from "../index";
export const UnfoldMore = React.memo<SvgIconProps>(
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
        <path d="M1.464 5.036L5 1.5l3.535 3.536M1.464 13.071L5 16.607l3.535-3.536" />
      </g>
    </svg>
  )
);
