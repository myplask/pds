import React from "react";
import { SvgIconProps } from "../index";
export const ArrowRightCircle = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <g fillRule="nonzero" fill="none">
        <circle fill="#3785F7" cx={12} cy={12} r={12} />
        <path
          d="M18.53 12.53a.75.75 0 000-1.06l-4.773-4.773a.75.75 0 00-1.06 1.06L16.939 12l-4.242 4.243a.75.75 0 001.06 1.06l4.773-4.773zM6 12.75h12v-1.5H6v1.5z"
          fill="#FFF"
        />
      </g>
    </svg>
  )
);
