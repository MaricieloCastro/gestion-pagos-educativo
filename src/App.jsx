import React from "react";
import { Routes, Route } from "react-router-dom";

//MODULOS
//Modulo de seguridad
import InformacionUsuario from "./modules/Seguridad/pages/InformacionUsuario";

import IniciarSesion from "./modules/Seguridad/pages/IniciarSesion";
import ListaUsuarios from "./modules/Seguridad/pages/ListaUsuarios";
import PanelAdministrador from "./modules/Seguridad/pages/PanelAdministrador";
import Perfil from "./modules/Seguridad/pages/Perfil";

import RestablecerContrasenia from "./modules/Seguridad/pages/RestablecerContrasenia";
import ActualizarContrasenia from "./modules/Seguridad/pages/ActualizarContrasenia";
import CrearUsuario from "./modules/Seguridad/pages/CrearUsuario";

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
