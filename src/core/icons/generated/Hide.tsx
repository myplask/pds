import React from "react";
import { SvgIconProps } from "../index";
export const Hide = React.memo<SvgIconProps>(
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
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      >
        <path d="M11 1c-.777 1.766-2.936 3-5 3S1.777 2.766 1 1M2.414 3l-1 1M10 3l1 1M6 4v1.414" />
      </g>
    </svg>
  )
);
