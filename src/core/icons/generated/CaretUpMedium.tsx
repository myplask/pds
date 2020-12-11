import React from "react";
import { SvgIconProps } from "../index";
export const CaretUpMedium = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M3.717.283a.4.4 0 01.566 0l3.034 3.034A.4.4 0 017.034 4H.966a.4.4 0 01-.283-.683L3.717.283z"
        fill={fillColor}
        fillRule="nonzero"
      />
    </svg>
  )
);
