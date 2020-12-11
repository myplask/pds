import React from "react";
import { SvgIconProps } from "../index";
export const Cursor = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M1.783 1.048l10.275 3.425-4.761 1.415a1 1 0 00-.674.674l-1.415 4.76L1.783 1.048z"
        stroke={fillColor}
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  )
);
