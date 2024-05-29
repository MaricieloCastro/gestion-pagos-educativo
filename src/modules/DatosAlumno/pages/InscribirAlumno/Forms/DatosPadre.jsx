import React from "react";
import FormController from "../components/FormController";
import { data } from "./data/DatosPadreData";
import DepartamentosSelect from "../components/DepartamentosSelect";

const DatosPadre = (props) => {
  const { control } = props;

  return (
    <div className="h-full">
      <div className="datos-padre  gap-5 p-5">
        {data.map((data) => (
          <div key={data.name}>
            <FormController
              control={control}
              type={data.type}
              name={data.name}
              label={data.label}
              placeholder={data.placeholder}
              disabled={data.disabled}
              options={data?.options}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatosPadre;
