import React from "react";
import { SvgIconProps } from "../index";
export const CaretDownSmall = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M2.846 3.316a.2.2 0 00.308 0L5.227.828A.2.2 0 005.073.5H.927a.2.2 0 00-.154.328l2.073 2.488z"
        fill={fillColor}
        fillRule="nonzero"
      />
    </svg>
  )
);
