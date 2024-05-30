import FormController from "../components/FormController";
import React from "react";
import DepartamentosSelect from "../components/DepartamentosSelect";
import "./Forms.scss";
import { data } from "./data/DatosPadreData";

const DatosPadre = (props) => {
  const { control, defaultDate } = props;
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
        <div className="grid grid-cols-4 gap-3 px-2 pb-3">
          {datosPrincipalesData.map((data) => (
            <div key={data.name}>
              <FormController
                control={control}
                type={data.type}
                name={data.name}
                label={data.label}
                placeholder={data.placeholder}
                disabled={data.disabled}
                options={data?.options}
                defaultDate={defaultDate}
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
                disabled={data.disabled}
                options={data?.options}
                defaultDate={defaultDate}
              />
            </div>
          ))}
          <DepartamentosSelect
            control={control}
            nameDepartamento="departamento_nacimiento_1"
            nameProvincia="provincia_nacimiento_1"
            nameDistrito="distrito_nacimiento_1"
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
                disabled={data.disabled}
                options={data?.options}
                defaultDate={defaultDate}
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
                disabled={data.disabled}
                options={data?.options}
                defaultDate={defaultDate}
              />
            </div>
          ))}
          <DepartamentosSelect
            control={control}
            nameDepartamento="departamento_domicilio_1"
            nameProvincia="provincia_domicilio_1"
            nameDistrito="distrito_domicilio_1"
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
                disabled={data.disabled}
                options={data?.options}
                defaultDate={defaultDate}
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

export default DatosPadre;
