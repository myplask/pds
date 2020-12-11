import React from "react";
import { SvgIconProps } from "../index";
export const Image = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <rect x={7} y={7} width={10} height={10} rx={1} fill={fillColor} />
      <path d="M11.967 10.636l3.15 4.773H8.818l3.15-4.773z" fill="#E7E7E7" />
      <circle cx={14.272} cy={9.727} fill="#E7E7E7" r={0.909} />
    </svg>
  )
);
