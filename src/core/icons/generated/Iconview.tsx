import React from "react";
import { SvgIconProps } from "../index";
export const Iconview = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <rect x={6} y={6} width={5.455} height={5.455} rx={1} fill={fillColor} />
      <rect
        x={12.545}
        y={6}
        width={5.455}
        height={5.455}
        rx={1}
        fill={fillColor}
      />
      <rect
        x={6}
        y={12.545}
        width={5.455}
        height={5.455}
        rx={1}
        fill={fillColor}
      />
      <rect
        x={12.545}
        y={12.545}
        width={5.455}
        height={5.455}
        rx={1}
        fill={fillColor}
      />
    </svg>
  )
);
