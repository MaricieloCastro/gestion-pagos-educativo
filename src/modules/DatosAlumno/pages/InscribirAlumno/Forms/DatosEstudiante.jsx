// import React from "react";
// import FormController from "../components/FormController";
// import { data } from "./data/DatosEstudianteData";

// const DatosEstudiante = ({ control }) => {
//   return (
//     <div className="crear-usuario__forms gap-5 p-5">
//       {data.map((fieldData) => (
//         <div key={fieldData.name}>
//           <FormController
//             control={control}
//             type={fieldData.type}
//             name={fieldData.name}
//             label={fieldData.label}
//             placeholder={fieldData.placeholder}
//             options={fieldData.options}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DatosEstudiante;

import React from "react";
import FormController from "../components/FormController";
import { data } from "./data/DatosEstudianteData";
import ImageUser from "../components/ImageUser";
import UploadFormularios from "../components/UploadFormularios";
import DepartamentosSelect from "../components/DepartamentosSelect";

const DatosEstudiante = ({ control }) => {
  const datosPrincipalesData = data.slice(0, 6);
  const datosSecundariosData = data.slice(6, 11);
  const datosSecundariosDireccionData = data.slice(11, 12);
  const datosSecundariosMatriculaData = data.slice(12, 19);

  return (
    <div className="datos-estudiante h-full">
      <div className="datos-estudiante__forms p-2 gap-2">
        <div className="datos-estudiante__forms-datos-principales gap-2">
          <div>
            <div className="w-[240px] min-w-[80px]">
              <ImageUser />
              <div className="flex justify-center items-center gap-1">
                <p className="text-sm">Fotografia: </p>
                <UploadFormularios />
              </div>
            </div>
          </div>
          <div className="bg-[#001F36]">
            <p className="text-white font-medium ease-linear underline my-2 ml-2 text-left">
              DATOS DEL ESTUDIANTE:
            </p>
            <div className="datos-estudiante__forms-datos-principales-inputs gap-3 px-2 pb-3">
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
                  />
                </div>
              ))}
              <DepartamentosSelect
                control={control}
                nameDepartamento="departamento_nacimiento"
                nameProvincia="provincia_nacimiento"
                nameDistrito="distrito_nacimiento"
                variante="NACIMIENTO"
              />
            </div>
          </div>
        </div>
        <div className="datos-estudiante__forms-datos-secundarios bg-[#001F36]">
          <div>
            <p className="text-white font-medium ease-linear underline my-2 ml-2 text-left">
              DATOS SECUNDARIOS DEL ESTUDIANTE:
            </p>
            <div className="datos-estudiante__forms-datos-secundarios-inputs gap-3 px-2 pb-3">
              {datosSecundariosData.map((data) => (
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
              <DepartamentosSelect
                control={control}
                nameDepartamento="departamento_domicilio"
                nameProvincia="provincia_domicilio"
                nameDistrito="distrito_domicilio"
                variante="DOMICILIO"
              />
              {datosSecundariosDireccionData.map((data) => (
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
            <div>
              <div>
                <p className="text-white font-medium ease-linear underline my-2 ml-2 text-left">
                  MATRICULA DEL ESTUDIANTE:
                </p>
                <div className="datos-estudiante__forms-datos-secundarios-inputs gap-3 px-2 pb-3">
                  {datosSecundariosMatriculaData.map((data) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatosEstudiante;
