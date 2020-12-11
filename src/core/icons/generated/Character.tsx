import React from "react";
import { SvgIconProps } from "../index";
export const Character = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <circle cx={12} cy={9} r={2} fill="#242424" />
      <path
        d="M11.646 12.354a.5.5 0 01.708 0l3.792 3.792a.5.5 0 01-.353.854H8.207a.5.5 0 01-.353-.854l3.792-3.792z"
        fill="#242424"
      />
    </svg>
  )
);
