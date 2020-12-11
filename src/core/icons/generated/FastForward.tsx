import React from "react";
import { SvgIconProps } from "../index";
export const Fastforward = React.memo<SvgIconProps>(
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
        d="M11.285 11.571a.5.5 0 010 .858l-3.528 2.117a.5.5 0 01-.757-.43V9.884a.5.5 0 01.757-.429l3.528 2.117zM17.285 11.571a.5.5 0 010 .858l-3.528 2.117a.5.5 0 01-.757-.43V9.884a.5.5 0 01.757-.429l3.528 2.117z"
        fill={fillColor}
      />
    </svg>
  )
);
