import React from "react";
import PropTypes from "prop-types";
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

SelectSimple.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default SelectSimple;
