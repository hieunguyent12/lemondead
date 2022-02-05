import React from "react";

const sizes = {
  regular: "py-2 px-4",
};

export type InputProps = {
  inputType?: "text" | "password";
  disabled?: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  children,
  disabled = false,
  inputType = "text",
  className,
  ...props
}) => {
  return (
    <input
      type={inputType}
      {...props}
      className={`shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring ${className}`}
    ></input>
  );
};
