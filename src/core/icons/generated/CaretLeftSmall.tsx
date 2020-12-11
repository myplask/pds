import React from "react";
import { SvgIconProps } from "../index";
export const CaretLeftSmall = React.memo<SvgIconProps>(
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
        d="M10.184 11.654a.2.2 0 010-.308l2.488-2.073a.2.2 0 01.328.154v4.146a.2.2 0 01-.328.154l-2.488-2.073z"
        fill={fillColor}
      />
    </svg>
  )
);
