import React from "react";
import { SvgIconProps } from "../index";
export const UnlockSmall = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <g fill={fillColor} fillRule="nonzero">
        <path d="M.5 2.678c0-.296.24-.536.536-.536h3.928c.296 0 .536.24.536.536v3.214c0 .296-.24.536-.536.536H1.036A.536.536 0 01.5 5.892V2.678z" />
        <path d="M4.524 1.714c0-.63.533-1.143 1.19-1.143.658 0 1.19.512 1.19 1.143H7.5C7.5.768 6.7 0 5.714 0S3.93.768 3.93 1.714v.429h.595v-.429z" />
      </g>
    </svg>
  )
);
