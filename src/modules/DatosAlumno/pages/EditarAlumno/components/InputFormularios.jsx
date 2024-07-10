import React from "react";

const InputFormularios = (props) => {
  const { field, fieldState, type, name, placeholder, disabled } = props;

  return (
    <input
      {...field}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      className={`block w-full py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset h-10 ${
        !fieldState.error
          ? "ring-gray-300 focus:ring-[#1877F2] border-[2px] border-blue-800 focus:border-0"
          : "ring-red-500 focus:ring-red-500"
      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:outline-none sm:text-sm sm:leading-6 `}
      disabled={disabled}
    />
  );
};

export default InputFormularios;
