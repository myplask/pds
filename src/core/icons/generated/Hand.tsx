import React from "react";
import { SvgIconProps } from "../index";
export const Hand = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M4.56 2a.5.5 0 01.5.5v4h1v-5a.5.5 0 111 0v5h1v-4a.5.5 0 111 0v4h1v-3a.5.5 0 111 0V9a4 4 0 01-4 4 3.954 3.954 0 01-2.954-1.327L1.434 8.668l-.01-.011-.01-.01-.25-.25a.56.56 0 11.793-.793l.973.972a.662.662 0 001.13-.468V2.5a.5.5 0 01.5-.5zm5.448.105A1.5 1.5 0 0112.061 3.5V9a5 5 0 01-5 5 4.954 4.954 0 01-3.703-1.663L.697 9.343l-.24-.24a1.56 1.56 0 012.207-2.207l.397.397V2.5a1.5 1.5 0 012.052-1.395 1.5 1.5 0 012.895 0 1.5 1.5 0 012 1z"
        fill={fillColor}
        fillRule="evenodd"
      />
    </svg>
  )
);
