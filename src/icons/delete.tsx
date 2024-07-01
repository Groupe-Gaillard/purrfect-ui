import React from "react";

type DeleteIconProps = {
  onClick: () => void;
};

const DeleteIcon: React.FC<DeleteIconProps> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      aria-hidden="true"
      height="25px"
      width="25px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default DeleteIcon;
