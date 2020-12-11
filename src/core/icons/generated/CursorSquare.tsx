import React from "react";
import { SvgIconProps } from "../index";
export const CursorSquare = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <rect width={24} height={24} rx={4} fill="#3785F7" />
      <path
        d="M7.783 7.048l10.275 3.425-4.761 1.415a1 1 0 00-.674.674l-1.415 4.76L7.783 7.048z"
        stroke="#fff"
      />
    </svg>
  )
);
