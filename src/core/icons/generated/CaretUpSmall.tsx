import React from "react";
import { SvgIconProps } from "../index";
export const CaretUpSmall = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M2.846.684a.2.2 0 01.308 0l2.073 2.488a.2.2 0 01-.154.328H.927a.2.2 0 01-.154-.328L2.846.684z"
        fill={fillColor}
        fillRule="nonzero"
      />
    </svg>
  )
);
