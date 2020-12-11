import React from "react";
import { SvgIconProps } from "../index";
export const CaretLeftMedium = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M.783 3.717a.4.4 0 000 .566l3.034 3.034a.4.4 0 00.683-.283V.966a.4.4 0 00-.683-.283L.783 3.717z"
        fill={fillColor}
        fillRule="nonzero"
      />
    </svg>
  )
);
