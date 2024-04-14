import React from "react";
import { Routes, Route } from "react-router-dom";

//MODULOS
//Modulo de seguridad
import InformacionUsuario from "./modules/Seguridad/InformacionUsuario";

import IniciarSesion from "./modules/Seguridad/IniciarSesion";
import ListaUsuarios from "./modules/Seguridad/ListaUsuarios";
import PanelAdministrador from "./modules/Seguridad/PanelAdministrador";
import Perfil from "./modules/Seguridad/Perfil";

import RestablecerContrasenia from "./modules/Seguridad/RestablecerContrasenia";
import ActualizarContrasenia from "./modules/Seguridad/ActualizarContrasenia";
import CrearUsuario from "./modules/Seguridad/CrearUsuario";

//RutasPrivadas
import PrivateRoutes from "./utils/PrivateRoutes";

//Modulo de datos alumnos
import MenuPrincipal from "./modules/DatosAlumno/MenuPrincipal";

const App = () => {
  return (
    <div className="bg-blue-claro h-screen">
      <Routes>
        <Route element={<IniciarSesion />} path="/login" />
        <Route element={<RestablecerContrasenia />} path="/login/restore" />
        <Route element={<ActualizarContrasenia />} path="/login/update" />
        {/* <Route element={<PrivateRoutes />}> */}
        <Route element={<MenuPrincipal />} path="/" />
        <Route element={<Perfil />} path="/perfil" />
        <Route element={<PanelAdministrador />} path="/panel-administrador" />
        <Route
          element={<ListaUsuarios />}
          path="/panel-administrador/lista-usuarios"
        />
        <Route
          element={<CrearUsuario />}
          path="/panel-administrador/lista-usuarios/create-user"
        />
        <Route
          element={<InformacionUsuario />}
          path="/panel-administrador/lista-usuarios/info-user/:id"
        />
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default App;
