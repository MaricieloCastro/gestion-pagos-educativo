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

const DatosEstudiante = ({ control }) => {
  // return (
  //   <div className="crear-usuario__forms gap-5 p-5">
  //     {data.map((fieldData) => (
  //       <div key={fieldData.name}>
  //         {fieldData.customComponent ? (
  //           <fieldData.customComponent control={control} />
  //         ) : (
  //           <FormController
  //             control={control}
  //             type={fieldData.type}
  //             name={fieldData.name}
  //             label={fieldData.label}
  //             placeholder={fieldData.placeholder}
  //             options={fieldData.options}
  //           />
  //         )}
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <div className="datos-estudiante h-full">
      <div className="datos-estudiante__forms p-2 gap-2">
        <div className="datos-estudiante__forms-datos-principales gap-2">
          <div>
            <div className="w-[30vh] min-w-[80px]">
              <ImageUser />
              <div className="flex justify-center items-center gap-1">
                <p className="text-sm">Fotografia: </p>
                <UploadFormularios />
              </div>
            </div>
          </div>
          <div className="bg-[#001F36]">
            <p className="text-white font-medium ease-linear underline mb-2 ml-2 text-left">
              DATOS DEL ESTUDIANTE:
            </p>
            <div className="datos-estudiante__forms-datos-principales-inputs gap-2 px-2 pb-2">
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
        </div>
        <div className="bg-[#001F36]">2</div>
      </div>
    </div>
  );
};

export default DatosEstudiante;
