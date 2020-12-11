import React from "react";
import { SvgIconProps } from "../index";
export const ArrowDownCircle = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <circle cx={12} cy={12} r={12} fill="#3785F7" />
      <path
        d="M11.47 18.53a.75.75 0 001.06 0l4.773-4.773a.75.75 0 00-1.06-1.06L12 16.939l-4.243-4.242a.75.75 0 10-1.06 1.06l4.773 4.773zM11.25 6v12h1.5V6h-1.5z"
        fill="#fff"
      />
    </svg>
  )
);
