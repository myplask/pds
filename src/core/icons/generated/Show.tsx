import React from "react";
import { SvgIconProps } from "../index";
export const Show = React.memo<SvgIconProps>(
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
        d="M12.011 15.499h-.022c-2.64.06-4.702-1.88-5.445-3.5C7.284 10.392 9.345 8.5 12 8.5c2.655 0 4.716 1.892 5.456 3.5-.743 1.62-2.805 3.558-5.445 3.499z"
        stroke={fillColor}
        strokeLinecap="round"
      />
      <circle cx={12} cy={12} r={1.5} fill={fillColor} stroke={fillColor} />
    </svg>
  )
);
