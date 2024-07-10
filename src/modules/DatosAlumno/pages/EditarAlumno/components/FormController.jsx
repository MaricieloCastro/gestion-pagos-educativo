import React from "react";
import { Controller } from "react-hook-form";
import InputFormularios from "./InputFormularios";
import DateFormularios from "./DateFormularios";
import DateWithYearsFormularios from "./DateWithYearsFormularios";
import SelectFormularios from "./SelectFormularios";

const FormController = (props) => {
  const {
    control,
    type,
    name,
    label,
    placeholder,
    children,
    disabled,
    options,
    defaultDate,
  } = props;

  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-normal leading-6 text-white"
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
              {type === "date" ? (
                <DateFormularios
                  field={field}
                  fieldState={fieldState}
                  name={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  defaultDate={defaultDate}
                />
              ) : type === "dateWithYears" ? (
                <DateWithYearsFormularios
                  field={field}
                  fieldState={fieldState}
                  name={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  defaultDate={defaultDate}
                />
              ) : type === "select" ? (
                <SelectFormularios
                  field={field}
                  fieldState={fieldState}
                  name={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  options={options}
                />
              ) : (
                <InputFormularios
                  field={field}
                  fieldState={fieldState}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  disabled={disabled}
                />
              )}
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

export default FormController;
