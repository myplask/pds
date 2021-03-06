import React from "react";
import { SvgIconProps } from "../index";
export const CursorSquare = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <rect fill="#3785F7" fillRule="nonzero" width={24} height={24} rx={4} />
        <path
          d="M7.783 7.048l10.275 3.425-4.761 1.415a1 1 0 00-.674.674l-1.415 4.76L7.783 7.048z"
          stroke="#FFF"
        />
      </g>
    </svg>
  )
);
