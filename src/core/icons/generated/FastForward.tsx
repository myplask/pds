import React from "react";
import { SvgIconProps } from "../index";
export const Fastforward = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <g fill={fillColor} fillRule="nonzero">
        <path d="M4.285 2.571a.5.5 0 010 .858L.757 5.546A.5.5 0 010 5.116V.884A.5.5 0 01.757.454l3.528 2.117zM10.285 2.571a.5.5 0 010 .858L6.757 5.546A.5.5 0 016 5.116V.884a.5.5 0 01.757-.429l3.528 2.117z" />
      </g>
    </svg>
  )
);
