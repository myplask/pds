import React from "react";
import { SvgIconProps } from "../index";
export const ArrowUp = React.memo<SvgIconProps>(
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
        d="M11.47 5.47a.75.75 0 011.06 0l4.773 4.773a.75.75 0 01-1.06 1.06L12 7.061l-4.243 4.242a.75.75 0 11-1.06-1.06L11.47 5.47zM11.25 18V6h1.5v12h-1.5z"
        fill={fillColor}
      />
    </svg>
  )
);
