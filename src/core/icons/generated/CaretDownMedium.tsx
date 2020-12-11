import React from "react";
import { SvgIconProps } from "../index";
export const CaretDownMedium = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M3.717 4.217a.4.4 0 00.566 0l3.034-3.034A.4.4 0 007.034.5H.966a.4.4 0 00-.283.683l3.034 3.034z"
        fill={fillColor}
        fillRule="nonzero"
      />
    </svg>
  )
);
