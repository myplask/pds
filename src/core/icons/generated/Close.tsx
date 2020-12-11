import React from "react";
import { SvgIconProps } from "../index";
export const Close = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M1 1l12 12m0-12L1 13"
        stroke={fillColor}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      />
    </svg>
  )
);
