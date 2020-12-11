import React from "react";
import { SvgIconProps } from "../index";
export const Character = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <g fill="#242424" fillRule="nonzero">
        <circle cx={5} cy={2} r={2} />
        <path d="M4.646 5.354a.5.5 0 01.708 0l3.792 3.792a.5.5 0 01-.353.854H1.207a.5.5 0 01-.353-.854l3.792-3.792z" />
      </g>
    </svg>
  )
);
