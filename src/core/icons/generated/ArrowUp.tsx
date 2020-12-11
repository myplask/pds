import React from "react";
import { SvgIconProps } from "../index";
export const ArrowUp = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M5.47.47a.75.75 0 011.06 0l4.773 4.773a.75.75 0 01-1.06 1.06L6 2.061 1.757 6.303a.75.75 0 11-1.06-1.06L5.47.47zM5.25 13V1h1.5v12h-1.5z"
        fill={fillColor}
        fillRule="nonzero"
      />
    </svg>
  )
);
