import React from "react";
import { SvgIconProps } from "../index";
export const CameraSquare = React.memo<SvgIconProps>(
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
          d="M8 7a1 1 0 011-1h6a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1V7z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <path
          d="M6 8a1 1 0 00-1 1v7a1 1 0 001 1h12a1 1 0 001-1V9a1 1 0 00-1-1H6zm8 4a2 2 0 11-4 0 2 2 0 014 0zm1 0a3 3 0 11-6 0 3 3 0 016 0z"
          fill="#FFF"
        />
      </g>
    </svg>
  )
);
