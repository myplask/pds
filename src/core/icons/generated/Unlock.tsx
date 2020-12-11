import React from "react";
import { SvgIconProps } from "../index";
export const Unlock = React.memo<SvgIconProps>(
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
        d="M15.11 9.2c0-1.178.995-2.133 2.223-2.133 1.227 0 2.222.955 2.222 2.133h1.111c0-1.767-1.492-3.2-3.333-3.2-1.841 0-3.334 1.433-3.334 3.2v.8h1.111v-.8z"
        fill="#151515"
      />
    </svg>
  )
);
