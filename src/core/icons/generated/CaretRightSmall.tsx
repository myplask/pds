import React from "react";
import { SvgIconProps } from "../index";
export const CaretRightSmall = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M2.816 2.654a.2.2 0 000-.308L.328.273A.2.2 0 000 .427v4.146a.2.2 0 00.328.154l2.488-2.073z"
        fill={fillColor}
        fillRule="nonzero"
      />
    </svg>
  )
);
