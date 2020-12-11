import React from "react";
import { SvgIconProps } from "../index";
export const Hide = React.memo<SvgIconProps>(
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
        d="M17 10c-.777 1.766-2.936 3-5 3s-4.223-1.234-5-3M8.414 12l-1 1M16 12l1 1M12 13v1.414"
        stroke={fillColor}
        strokeLinecap="round"
      />
    </svg>
  )
);
