import React from "react";
import IconSVG from "./IconSVG";

const FilesIcon = ({ opacity = 1 }: { opacity?: number }) => {
  return (
    <IconSVG
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="25px"
      width="25px"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      ></path>
    </IconSVG>
  );
};

export default FilesIcon;
