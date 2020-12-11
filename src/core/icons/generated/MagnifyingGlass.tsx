import React from "react";
import { SvgIconProps } from "../index";
export const Magnifyingglass = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <circle
        cx={10.232}
        cy={10.232}
        r={5}
        transform="rotate(-45 10.232 10.232)"
        stroke={fillColor}
      />
      <path
        d="M12.708 12.707a3.5 3.5 0 01-4.95 0"
        stroke={fillColor}
        strokeLinecap="round"
      />
      <rect
        x={12.707}
        y={14.121}
        width={2}
        height={6}
        rx={1}
        transform="rotate(-45 12.707 14.121)"
        fill={fillColor}
      />
    </svg>
  )
);
