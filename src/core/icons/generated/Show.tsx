import React from "react";
import { SvgIconProps } from "../index";
export const Show = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <g
        transform="translate(1)"
        stroke={fillColor}
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M6.011 7.499H5.99c-2.64.06-4.702-1.88-5.445-3.5C1.284 2.392 3.345.5 6 .5c2.655 0 4.716 1.892 5.456 3.5-.743 1.62-2.805 3.558-5.445 3.499z"
          strokeLinecap="round"
        />
        <circle fill={fillColor} fillRule="nonzero" cx={6} cy={4} r={1.5} />
      </g>
    </svg>
  )
);
