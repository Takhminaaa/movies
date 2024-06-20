import React, { Children } from "react";
export const Button = ({ className, children, backgroundColor }) => {
  return (
    <button
      className={className}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      {children}
    </button>
  );
};
