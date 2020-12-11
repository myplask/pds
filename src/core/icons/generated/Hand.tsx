import React from "react";
import { SvgIconProps } from "../index";
export const Hand = React.memo<SvgIconProps>(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.56 7a.5.5 0 01.5.5v4h1v-5a.5.5 0 111 0v5h1v-4a.5.5 0 111 0v4h1v-3a.5.5 0 111 0V14a4 4 0 01-4 4 3.954 3.954 0 01-2.954-1.327l-2.672-3.005-.01-.011-.01-.01-.25-.25a.56.56 0 11.793-.793l.973.972a.662.662 0 001.13-.468V7.5a.5.5 0 01.5-.5zm5.448.105A1.5 1.5 0 0117.061 8.5V14a5 5 0 01-5 5 4.954 4.954 0 01-3.703-1.663l-2.661-2.994-.24-.24a1.56 1.56 0 012.207-2.207l.397.397V7.5a1.5 1.5 0 012.052-1.395 1.5 1.5 0 012.895 0 1.5 1.5 0 012 1z"
        fill={fillColor}
      />
    </svg>
  )
);
