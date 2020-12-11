import React from "react";
import { SvgIconProps } from "../index";
export const MagnifyingglassSquare = React.memo<SvgIconProps>(
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
        <circle
          stroke="#FFF"
          transform="rotate(-45 10.232 10.232)"
          cx={10.232}
          cy={10.232}
          r={5}
        />
        <path
          d="M12.708 12.707a3.5 3.5 0 01-4.95 0"
          stroke="#FFF"
          strokeLinecap="round"
        />
        <rect
          fill="#FFF"
          fillRule="nonzero"
          transform="rotate(-45 15.535 15.536)"
          x={14.535}
          y={12.536}
          width={2}
          height={6}
          rx={1}
        />
      </g>
    </svg>
  )
);
