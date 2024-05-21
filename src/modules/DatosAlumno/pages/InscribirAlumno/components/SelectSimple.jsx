// components/SelectSimple.jsx
import React from "react";
import Select from "react-select";
import "../../InscribirAlumno/InscribirAlumno.css";

const SelectSimple = ({
  options,
  value,
  onChange,
  placeholder,
  isDisabled,
}) => {
  return (
    <Select
      className="basic-single text-black"
      classNamePrefix="select"
      value={value}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      isDisabled={isDisabled}
    />
  );
};

export default SelectSimple;
