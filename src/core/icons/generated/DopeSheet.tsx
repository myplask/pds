import React from "react";
import { SvgIconProps } from "../index";
export const Dopesheet = React.memo<SvgIconProps>(
  ({ size = 24, fillColor = "#000", style }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 24 24"
    >
      <path stroke={fillColor} d="M6.25 12.5h5M13.25 12.5h5" />
      <mask id="Dope_sheet_svg__a" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.75 14.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75 14.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
        fill="#398BFF"
      />
      <path
        d="M5.75 12.5a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zm-1 1a1 1 0 011-1v-2a3 3 0 00-3 3h2zm1 1a1 1 0 01-1-1h-2a3 3 0 003 3v-2zm0-1v2a2 2 0 002-2h-2zm0 0h2a2 2 0 00-2-2v2zm0 0v-2a2 2 0 00-2 2h2zm0 0h-2a2 2 0 002 2v-2z"
        fill={fillColor}
        mask="url(#Dope_sheet_svg__a)"
      />
      <mask id="Dope_sheet_svg__b" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.25 14.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.25 14.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
        fill="#398BFF"
      />
      <path
        d="M13.25 12.5a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zm-1 1a1 1 0 011-1v-2a3 3 0 00-3 3h2zm1 1a1 1 0 01-1-1h-2a3 3 0 003 3v-2zm0-1v2a2 2 0 002-2h-2zm0 0h2a2 2 0 00-2-2v2zm0 0v-2a2 2 0 00-2 2h2zm0 0h-2a2 2 0 002 2v-2z"
        fill={fillColor}
        mask="url(#Dope_sheet_svg__b)"
      />
      <mask id="Dope_sheet_svg__c" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.25 14.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.25 14.5a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
        fill="#398BFF"
      />
      <path
        d="M20.25 12.5a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zm-1 1a1 1 0 011-1v-2a3 3 0 00-3 3h2zm1 1a1 1 0 01-1-1h-2a3 3 0 003 3v-2zm0-1v2a2 2 0 002-2h-2zm0 0h2a2 2 0 00-2-2v2zm0 0v-2a2 2 0 00-2 2h2zm0 0h-2a2 2 0 002 2v-2z"
        fill={fillColor}
        mask="url(#Dope_sheet_svg__c)"
      />
    </svg>
  )
);
