import React, { useState } from "react";
import "../InscribirAlumno.css";
import SelectSimple from "./SelectSimple"; // select
import { Departamentos } from "./OpcionesSelect";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Definir el esquema de validación usando Zod
const FormSchem = z.object({
  sexo: z.string().min(1, "Campo requerido"), // Agrega la validación para sexo
  estadoCivil: z.string().min(1, "Campo requerido"), // Agrega la validación para estado civil
  vive: z.string().min(1, "Campo requerido"), // Agrega la validación para vive
  viveCon: z.string().min(1, "Campo requerido"), // Agrega la validación para vive con
  apoderado: z.string().min(1, "Campo requerido"), // Agrega la validación para apoderado
  gradoInstitucional: z.string().min(1, "Campo requerido"), // Agrega la validación para grado institucional
});
const onSubmit = (data) => {
  // Validar los selects antes de enviar el formulario
  if (!selectedOptionSexo) {
    setError("sexo", { message: "Selecciona una opción de sexo." });
    return;
  }
  if (!selectedOptionEstadoCivil) {
    setError("estadoCivil", {
      message: "Selecciona una opción de estado civil.",
    });
    return;
  }
  if (!selectedOptionVive) {
    setError("vive", { message: "Selecciona una opción de vive." });
    return;
  }
  if (!selectedOptionViveCon) {
    setError("viveCon", { message: "Selecciona una opción de vive con." });
    return;
  }
  if (!selectedOptionApoderado) {
    setError("apoderado", { message: "Selecciona una opción de apoderado." });
    return;
  }
  if (!selectedOptionGradoInstitucional) {
    setError("gradoInstitucional", {
      message: "Selecciona una opción de grado institucional.",
    });
    return;
  }

  console.log("Datos del formulario:", {
    ...data,
    sexo: selectedOptionSexo,
    estadoCivil: selectedOptionEstadoCivil,
    vive: selectedOptionVive,
    viveCon: selectedOptionViveCon,
    apoderado: selectedOptionApoderado,
    gradoInstitucional: selectedOptionGradoInstitucional,
  });
};

export default function Ubigeo() {
  //ubigeo
  const [selectedDepartamento, setSelectedDepartamento] = useState(null);
  const [selectedProvincia, setSelectedProvincia] = useState(null);
  const [selectedDistrito, setSelectedDistrito] = useState(null);

  const handleDepartamentoChange = (selectedOption) => {
    setSelectedDepartamento(selectedOption);
    setSelectedProvincia(null);
    setSelectedDistrito(null);
  };

  const handleProvinciaChange = (selectedOption) => {
    setSelectedProvincia(selectedOption);
    setSelectedDistrito(null);
  };

  const handleDistritoChange = (selectedOption) => {
    setSelectedDistrito(selectedOption);
  };

  return (
    <div className="grid grid-cols-3">
      <div className="px-2">
        <h3 className="pb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          DEPARTAMENTO:
        </h3>
        <SelectSimple
          options={Departamentos}
          name="departamento"
          placeholder="Departamento"
          value={selectedDepartamento}
          onChange={handleDepartamentoChange}
          isDisabled={false}
        />
        {/* {errors.ubicacion && (
          <p
            id=":r21:-form-item-message"
            className="text-sm font-medium text-destructive"
          >
            {errors.ubicacion.message}
          </p>
        )} */}
      </div>
      <div className="px-2">
        <h2 className="pb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          PROVINCIA:
        </h2>
        <SelectSimple
          options={selectedDepartamento ? selectedDepartamento.provincias : []}
          value={selectedProvincia}
          name="provincia"
          placeholder="Provincia"
          onChange={handleProvinciaChange}
          isDisabled={!selectedDepartamento}
        />
        {/* {errors.ubicacion && (
          <p
            id=":r21:-form-item-message"
            className="text-sm font-medium text-destructive"
          >
            {errors.ubicacion.message}
          </p>
        )} */}
      </div>
      <div className="pl-2">
        <h2 className="pb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          DISTRITO:
        </h2>
        <SelectSimple
          options={selectedProvincia ? selectedProvincia.distritos : []}
          value={selectedDistrito}
          name="distrito"
          placeholder="Distrito"
          onChange={handleDistritoChange}
          isDisabled={!selectedProvincia}
        />
        {/* {errors.ubicacion && (
          <p
            id=":r21:-form-item-message"
            className="text-sm font-medium text-destructive"
          >
            {errors.ubicacion.message}
          </p>
        )} */}
      </div>
    </div>
  );
}
