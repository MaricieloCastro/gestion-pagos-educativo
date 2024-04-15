import React from "react";

import EscudoCiencias from "../../../assets/img/escudoCiencias.png";

const Box = ({ children }) => {
  return (
    <div className="h-screen grid grid-cols-login-grid relative max-lg:grid-cols-1">
      <div className="flex justify-center items-center min-w-login-minWidth">
        <div className="flex flex-col justify-center h-full w-full mx-28 max-lg:mx-60 min-w-login-minWidth-responsive">
          <div className="flex justify-between mb-10">
            <a href="https://www.iepciencias.edu.pe/" target="_blank">
              <img
                className="w-login-header"
                src={EscudoCiencias}
                alt="escudo-ciencias"
              />
            </a>
            <div className="flex justify-center items-center">
              <h1 className="font-semibold text-lg  text-white-texto text-center tracking-wider">
                GESTIÓN EDUCATIVA DE PROCESOS DE PAGO
              </h1>
            </div>
          </div>
          {children}
        </div>
      </div>
      <div className="login__img max-lg:hidden transition-shadow" />
    </div>
  );
};

export default Box;
