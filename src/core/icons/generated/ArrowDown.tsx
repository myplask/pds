import React from "react";
import { SvgIconProps } from "../index";
export const ArrowDown = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M5.47 12.53a.75.75 0 001.06 0l4.773-4.773a.75.75 0 00-1.06-1.06L6 10.939 1.757 6.697a.75.75 0 10-1.06 1.06L5.47 12.53zM5.25 0v12h1.5V0h-1.5z"
        fill={fillColor}
        fillRule="nonzero"
      />
    </svg>
  )
);
