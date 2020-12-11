import React from "react";
import { SvgIconProps } from "../index";
export const CaretDownMedium = React.memo<SvgIconProps>(
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
        d="M11.717 14.217a.4.4 0 00.566 0l3.034-3.034a.4.4 0 00-.283-.683H8.966a.4.4 0 00-.283.683l3.034 3.034z"
        fill={fillColor}
      />
    </svg>
  )
);
