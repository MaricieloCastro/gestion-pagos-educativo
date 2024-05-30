import React from "react";

const ResumenDatos = ({
  estudianteData,
  padreData,
  madreData,
  familiarExtraData,
}) => {
  return (
    <div>
      <h3>Datos del Estudiante</h3>
      {Object.entries(estudianteData).map(([key, value]) => (
        <p key={key}>{`${key}: ${value}`}</p>
      ))}

      <h3>Datos del Padre</h3>
      {Object.entries(padreData).map(([key, value]) => (
        <p key={key}>{`${key}: ${value}`}</p>
      ))}

      <h3>Datos de la Madre</h3>
      {Object.entries(madreData).map(([key, value]) => (
        <p key={key}>{`${key}: ${value}`}</p>
      ))}

      <h3>Datos del Familiar Extra</h3>
      {Object.entries(familiarExtraData).map(([key, value]) => (
        <p key={key}>{`${key}: ${value}`}</p>
      ))}
    </div>
  );
};

export default ResumenDatos;
