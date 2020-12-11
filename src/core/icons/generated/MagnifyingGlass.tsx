import React from "react";
import { SvgIconProps } from "../index";
export const Magnifyingglass = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <g transform="translate(1 1)" fill="none" fillRule="evenodd">
        <circle
          stroke={fillColor}
          transform="rotate(-45 7.232 7.232)"
          cx={7.232}
          cy={7.232}
          r={5}
        />
        <path
          d="M9.708 9.707a3.5 3.5 0 01-4.95 0"
          stroke={fillColor}
          strokeLinecap="round"
        />
        <rect
          fill={fillColor}
          fillRule="nonzero"
          transform="rotate(-45 12.535 12.536)"
          x={11.535}
          y={9.536}
          width={2}
          height={6}
          rx={1}
        />
      </g>
    </svg>
  )
);
