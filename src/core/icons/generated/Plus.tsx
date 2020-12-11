import React from "react";
import { SvgIconProps } from "../index";
export const Plus = React.memo<SvgIconProps>(
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
        d="M12 3.515v16.97M20.485 12H3.515"
        stroke={fillColor}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
);
