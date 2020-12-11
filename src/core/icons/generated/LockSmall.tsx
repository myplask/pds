import React from "react";
import { SvgIconProps } from "../index";
export const LockSmall = React.memo<SvgIconProps>(
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
        d="M12 9.571c-.658 0-1.19.512-1.19 1.143v.428h2.38v-.428c0-.63-.533-1.143-1.19-1.143zm1.786 1.571v-.428C13.786 9.768 12.986 9 12 9s-1.786.768-1.786 1.714v.428h-.178a.536.536 0 00-.536.536v3.214c0 .296.24.536.536.536h3.928c.296 0 .536-.24.536-.536v-3.214a.536.536 0 00-.536-.536h-.178z"
        fill={fillColor}
      />
    </svg>
  )
);
