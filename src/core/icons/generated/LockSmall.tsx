import React from "react";
import { SvgIconProps } from "../index";
export const LockSmall = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M3 .571c-.658 0-1.19.512-1.19 1.143v.428h2.38v-.428c0-.63-.533-1.143-1.19-1.143zm1.786 1.571v-.428C4.786.768 3.986 0 3 0S1.214.768 1.214 1.714v.428h-.178a.536.536 0 00-.536.536v3.214c0 .296.24.536.536.536h3.928c.296 0 .536-.24.536-.536V2.678a.536.536 0 00-.536-.536h-.178z"
        fill={fillColor}
        fillRule="evenodd"
      />
    </svg>
  )
);
