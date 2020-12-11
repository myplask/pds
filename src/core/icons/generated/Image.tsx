import React from "react";
import { SvgIconProps } from "../index";
export const Image = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <g fillRule="nonzero" fill="none">
        <rect fill={fillColor} width={10} height={10} rx={1} />
        <path fill="#E7E7E7" d="M4.968 3.636L8.117 8.41H1.818z" />
        <circle fill="#E7E7E7" cx={7.272} cy={2.727} r={1} />
      </g>
    </svg>
  )
);
