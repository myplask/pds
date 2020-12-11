import React from "react";
import { SvgIconProps } from "../index";
export const Dopesheet = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={style}
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          d="M2.75 4.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
          id="Dope_sheet_svg__a"
        />
        <path
          d="M2.25 4.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
          id="Dope_sheet_svg__c"
        />
        <path
          d="M2.25 4.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
          id="Dope_sheet_svg__e"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path stroke={fillColor} d="M4.25 2.5h5M11.25 2.5h5" />
        <path
          d="M2.75 4.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
          fill="#398BFF"
        />
        <g>
          <mask id="Dope_sheet_svg__b" fill="#fff">
            <use xlinkHref="#Dope_sheet_svg__a" />
          </mask>
          <path
            d="M3.75 2.5a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zm-1 1a1 1 0 011-1v-2a3 3 0 00-3 3h2zm1 1a1 1 0 01-1-1h-2a3 3 0 003 3v-2zm0-1v2a2 2 0 002-2h-2zm0 0h2a2 2 0 00-2-2v2zm0 0v-2a2 2 0 00-2 2h2zm0 0h-2a2 2 0 002 2v-2z"
            fill={fillColor}
            fillRule="nonzero"
            mask="url(#Dope_sheet_svg__b)"
          />
        </g>
        <path
          d="M10.25 4.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
          fill="#398BFF"
        />
        <g transform="translate(8)">
          <mask id="Dope_sheet_svg__d" fill="#fff">
            <use xlinkHref="#Dope_sheet_svg__c" />
          </mask>
          <path
            d="M3.25 2.5a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zm-1 1a1 1 0 011-1v-2a3 3 0 00-3 3h2zm1 1a1 1 0 01-1-1h-2a3 3 0 003 3v-2zm0-1v2a2 2 0 002-2h-2zm0 0h2a2 2 0 00-2-2v2zm0 0v-2a2 2 0 00-2 2h2zm0 0h-2a2 2 0 002 2v-2z"
            fill={fillColor}
            fillRule="nonzero"
            mask="url(#Dope_sheet_svg__d)"
          />
        </g>
        <path
          d="M17.25 4.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
          fill="#398BFF"
        />
        <g transform="translate(15)">
          <mask id="Dope_sheet_svg__f" fill="#fff">
            <use xlinkHref="#Dope_sheet_svg__e" />
          </mask>
          <path
            d="M3.25 2.5a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zm-1 1a1 1 0 011-1v-2a3 3 0 00-3 3h2zm1 1a1 1 0 01-1-1h-2a3 3 0 003 3v-2zm0-1v2a2 2 0 002-2h-2zm0 0h2a2 2 0 00-2-2v2zm0 0v-2a2 2 0 00-2 2h2zm0 0h-2a2 2 0 002 2v-2z"
            fill={fillColor}
            fillRule="nonzero"
            mask="url(#Dope_sheet_svg__f)"
          />
        </g>
      </g>
    </svg>
  )
);
