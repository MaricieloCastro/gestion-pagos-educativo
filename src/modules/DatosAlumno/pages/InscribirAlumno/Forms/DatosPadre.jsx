import InputForm from "@/components/InputForm";
import React from "react";

import "./Forms.scss";
import { data } from "./data/DatosPadreData";

const DatosPadre = (props) => {
  const { control } = props;

  return (
    <div className="crear-usuario__forms gap-5 p-5">
      {data.map((data) => (
        <div key={data.name}>
          <InputForm
            control={control}
            type={data.type}
            name={data.name}
            label={data.label}
            placeholder={data.placeholder}
          />
        </div>
      ))}
    </div>
  );
};

export default DatosPadre;
