import React from "react";
import { SvgIconProps } from "../index";
export const CaretRightSmall = React.memo<SvgIconProps>(
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
        d="M13.816 11.654a.2.2 0 000-.308l-2.488-2.073a.2.2 0 00-.328.154v4.146a.2.2 0 00.328.154l2.488-2.073z"
        fill={fillColor}
      />
    </svg>
  )
);
