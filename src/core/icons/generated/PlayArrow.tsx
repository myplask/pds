import React from "react";
import { SvgIconProps } from "../index";
export const Playarrow = React.memo<SvgIconProps>(
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
        d="M17.52 11.136a1 1 0 010 1.728l-9.016 5.259A1 1 0 017 17.259V6.741a1 1 0 011.504-.864l9.015 5.26z"
        fill={fillColor}
      />
    </svg>
  )
);
