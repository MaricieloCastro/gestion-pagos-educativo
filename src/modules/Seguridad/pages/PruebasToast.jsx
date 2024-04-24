import React, { useState } from "react";
import { Exito, Error, Emogi } from "../../../components/Toasts";

const PruebasToast = () => {
  const [isopen1, setIsopen1] = useState(false);
  const [isopen2, setIsopen2] = useState(false);
  const [isopen4, setIsopen4] = useState(false);
  const tituloBoton = "Enviar";
  return (
    <div>
      {/*Toast Exitoso*/}
      <h1 className="pb-10 ">
        {isopen1 && <Exito />}
        <Exito tituloBoton={tituloBoton} cambiarEstado={setIsopen1} />
      </h1>
      {/*Toast Error*/}
      <div>
        <div className="pb-10">
          {isopen2 && <Error />}
          <Error tituloBoton={tituloBoton} cambiarEstado={setIsopen2} />
        </div>
      </div>
      {/*Toast Emogi*/}
      <div>
        <div className="pb-10">
          {isopen4 && <Emogi />}
          <Emogi tituloBoton={tituloBoton} cambiarEstado={setIsopen4} />
        </div>
      </div>
    </div>
  );
};

export default PruebasToast;
