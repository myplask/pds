import React from "react";
import { SvgIconProps } from "../index";
export const CaretDownSmall = React.memo<SvgIconProps>(
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
        d="M11.846 13.316a.2.2 0 00.308 0l2.073-2.488a.2.2 0 00-.154-.328H9.927a.2.2 0 00-.154.328l2.073 2.488z"
        fill={fillColor}
      />
    </svg>
  )
);
