import React from "react";
import { SvgIconProps } from "../index";
export const Lock = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <g fillRule="nonzero" fill="none">
        <path
          d="M0 4.999a1 1 0 011-1h7.333a1 1 0 011 1v6a1 1 0 01-1 1H1a1 1 0 01-1-1v-6z"
          fill={fillColor}
        />
        <path
          d="M2.444 3.2c0-1.178.995-2.133 2.223-2.133 1.227 0 2.222.955 2.222 2.133V4H8v-.8C8 1.433 6.508 0 4.667 0 2.826 0 1.333 1.433 1.333 3.2V4h1.111v-.8z"
          fill="#151515"
        />
      </g>
    </svg>
  )
);
