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
    <div className="inscribir-alumno__forms gap-5 p-5">
      {data.map((fieldData) => (
        <div key={fieldData.name}>
          <FormController
            control={control}
            type={fieldData.type}
            name={fieldData.name}
            label={fieldData.label}
            placeholder={fieldData.placeholder}
            options={fieldData.options}
          />
        </div>
      ))}
    </div>
  );
};

export default DatosEstudiante;
