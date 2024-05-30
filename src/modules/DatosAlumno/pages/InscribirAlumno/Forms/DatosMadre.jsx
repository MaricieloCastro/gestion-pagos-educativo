import React from "react";
import FormController from "../components/FormController";
import { data } from "./data/DatosMadreData";
import DepartamentosSelect from "../components/DepartamentosSelect";

const DatosMadre = (props) => {
  const { control } = props;
  const datosPrincipalesData = data.slice(0, 4);
  const datosNacimiento1 = data.slice(4, 6);
  const datosNacimiento2 = data.slice(6, 12);
  const datosDomicilio1 = data.slice(12, 14);
  const datosDomicilio2 = data.slice(14, 19);
  return (
    <div className="p-2">
      <div className="bg-[#001F36] h-full">
        <p className="text-white font-medium ease-linear underline ml-2 text-left">
          DATOS DEL FAMILIAR:
        </p>
        <div className="grid grid-flow-col-dense gap-3 px-2 pb-3">
          {datosPrincipalesData.map((data) => (
            <div key={data.name}>
              <FormController
                control={control}
                type={data.type}
                name={data.name}
                label={data.label}
                placeholder={data.placeholder}
              />
            </div>
          ))}
        </div>
        <h3 className="text-center text-gray-500 py-2">LUGAR DE NACIMIENTO</h3>
        <div className="grid grid-cols-4 gap-3 px-2 pb-3">
          {datosNacimiento1.map((data) => (
            <div key={data.name}>
              <FormController
                control={control}
                type={data.type}
                name={data.name}
                label={data.label}
                placeholder={data.placeholder}
              />
            </div>
          ))}
          <DepartamentosSelect
            control={control}
            nameDepartamento="departamento_nacimiento_2"
            nameProvincia="provincia_nacimiento_2"
            nameDistrito="distrito_nacimiento_2"
            variante="NACIMIENTO"
          />
          {datosNacimiento2.map((data) => (
            <div key={data.name}>
              <FormController
                control={control}
                type={data.type}
                name={data.name}
                label={data.label}
                placeholder={data.placeholder}
              />
            </div>
          ))}
        </div>
        <h3 className="text-center text-gray-500 py-2">DOMICILIO</h3>
        <div className="grid grid-cols-4 gap-3 px-2 pb-3">
          {datosDomicilio1.map((data) => (
            <div key={data.name}>
              <FormController
                control={control}
                type={data.type}
                name={data.name}
                label={data.label}
                placeholder={data.placeholder}
              />
            </div>
          ))}
          <DepartamentosSelect
            control={control}
            nameDepartamento="departamento_domicilio_2"
            nameProvincia="provincia_domicilio_2"
            nameDistrito="distrito_domicilio_2"
            variante="DOMICILIO"
          />
          {datosDomicilio2.map((data) => (
            <div key={data.name}>
              <FormController
                control={control}
                type={data.type}
                name={data.name}
                label={data.label}
                placeholder={data.placeholder}
              />
            </div>
          ))}
        </div>
      </div>
      {/* {data.map((data) => (
        <div key={data.name}>
          <InputForm
            control={control}
            type={data.type}
            name={data.name}
            label={data.label}
            placeholder={data.placeholder}
          />
        </div>
      ))} */}
    </div>
  );
};

export default DatosMadre;
