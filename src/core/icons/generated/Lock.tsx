import React from "react";
import { SvgIconProps } from "../index";
export const Lock = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M7 10.999a1 1 0 011-1h7.333a1 1 0 011 1v6a1 1 0 01-1 1H8a1 1 0 01-1-1v-6z"
        fill={fillColor}
      />
      <path
        d="M9.444 9.2c0-1.178.995-2.133 2.223-2.133 1.227 0 2.222.955 2.222 2.133v.8H15v-.8C15 7.433 13.508 6 11.667 6 9.826 6 8.333 7.433 8.333 9.2v.8h1.111v-.8z"
        fill="#151515"
      />
    </svg>
  )
);
