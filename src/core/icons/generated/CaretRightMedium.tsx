import React from "react";
import { SvgIconProps } from "../index";
export const CaretRightMedium = React.memo<SvgIconProps>(
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
        d="M14.217 11.717a.4.4 0 010 .566l-3.034 3.034a.4.4 0 01-.683-.283V8.966a.4.4 0 01.683-.283l3.034 3.034z"
        fill={fillColor}
      />
    </svg>
  )
);
