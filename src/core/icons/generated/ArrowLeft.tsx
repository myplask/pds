import React from "react";
import { SvgIconProps } from "../index";
export const ArrowLeft = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M.47 6.53a.75.75 0 010-1.06L5.243.697a.75.75 0 011.06 1.06L2.061 6l4.242 4.243a.75.75 0 01-1.06 1.06L.47 6.53zM13 6.75H1v-1.5h12v1.5z"
        fill={fillColor}
        fillRule="nonzero"
      />
    </svg>
  )
);
