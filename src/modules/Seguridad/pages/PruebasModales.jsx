import React, { useState } from "react";
import {
  OneButton,
  TwoButton,
  Loading,
  TwoSecond,
} from "../../../components/Modales";

const PruebasModales = () => {
  const [isopen1, setIsopen1] = useState(false);
  const [isopen2, setIsopen2] = useState(false);
  const [isopen3, setIsopen3] = useState(false);
  const [isopen4, setIsopen4] = useState(false);

  const titulo = {
    h1: "¿Estas seguro de realizar esta acción?",
    h2: "Esta acción puede generar cambios dentro del sistema",
  };

  return (
    <div>
      <div className="pb-10">
        {isopen1 && (
          <OneButton tituloInfo={titulo} cambiarEstado={setIsopen1} />
        )}
        <button
          className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
          onClick={() => setIsopen1(true)}
        >
          Modal 1 boton
        </button>
      </div>

      <div className="pb-10">
        {isopen2 && (
          <TwoButton tituloInfo={titulo} cambiarEstado={setIsopen2} />
        )}
        <button
          className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
          onClick={() => setIsopen2(true)}
        >
          Modal 2 botones
        </button>
      </div>

      <div className="pb-10">
        {isopen3 && <Loading />}
        <button
          className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
          onClick={() => setIsopen3(true)}
        >
          Modal Loading
        </button>
      </div>

      <div className="pb-10">
        {isopen4 && <TwoSecond />}
        <button
          className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
          onClick={() => setIsopen4(true)}
        >
          Modal 2 segundos
        </button>
      </div>
    </div>
  );
};

export default PruebasModales;
