import React from "react";
import { SvgIconProps } from "../index";
export const UnlockSmall = React.memo<SvgIconProps>(
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
        d="M9.5 11.678c0-.296.24-.536.536-.536h3.928c.296 0 .536.24.536.536v3.214c0 .296-.24.536-.536.536h-3.928a.536.536 0 01-.536-.536v-3.214z"
        fill={fillColor}
      />
      <path
        d="M13.524 10.714c0-.63.533-1.143 1.19-1.143.658 0 1.19.512 1.19 1.143h.596C16.5 9.768 15.7 9 14.714 9s-1.785.768-1.785 1.714v.429h.595v-.429z"
        fill={fillColor}
      />
    </svg>
  )
);
