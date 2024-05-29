import React from "react";
import { Controller } from "react-hook-form";

const InputForm = (props) => {
  const { control, type, name, label, placeholder, children } = props;

  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-700"
        >
          {label}
        </label>
        {children}
      </div>
      <div className="mt-1">
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState }) => (
            <div>
              <input
                {...field}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`block w-full border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset h-10 ${
                  !fieldState.error
                    ? "ring-gray-300 focus:ring-[#1877F2]"
                    : "ring-red-500 focus:ring-red-500"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:outline-none sm:text-sm sm:leading-6 `}
              />
              {fieldState.error && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default InputForm;
