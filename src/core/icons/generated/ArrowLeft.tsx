import React from "react";
import { SvgIconProps } from "../index";
export const ArrowLeft = React.memo<SvgIconProps>(
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
        d="M5.47 12.53a.75.75 0 010-1.06l4.773-4.773a.75.75 0 011.06 1.06L7.061 12l4.242 4.243a.75.75 0 01-1.06 1.06L5.47 12.53zm12.53.22H6v-1.5h12v1.5z"
        fill={fillColor}
      />
    </svg>
  )
);
