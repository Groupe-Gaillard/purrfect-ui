import React from "react";
import IconSVG from "src/icons/IconSVG";

const WarningIcon = () => {
  return (
    <IconSVG
      viewBox="0 0 1024 1024"
      fill="currentColor"
      role="img"
      aria-label="warning-icon"
    >
      <g>
        <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"></path>
      </g>
    </IconSVG>
  );
};

export default WarningIcon;
