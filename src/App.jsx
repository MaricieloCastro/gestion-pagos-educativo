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

import { enlaces } from "./components/MenuLateral/rutas";

//RutasPrivadas
import PrivateRoutes from "./utils/PrivateRoutes";

//Modulo de datos alumnos
import MenuPrincipal from "./modules/DatosAlumno/MenuPrincipal";

const App = () => {
  return (
    <div className="bg-blue-claro h-screen">
      <Routes>
        <Route element={<IniciarSesion />} path={enlaces[3].path + enlaces[0].path} />
        <Route element={<RestablecerContrasenia />} path={enlaces[3].path + enlaces[0].path + enlaces[1].path} />
        <Route element={<ActualizarContrasenia />} path={enlaces[3].path + enlaces[0].path + enlaces[2].path} />
        {/* <Route element={<PrivateRoutes />}> */}
        <Route element={<MenuPrincipal />} path={enlaces[3].path} />
        <Route element={<Perfil />} path={enlaces[3].path + enlaces[4].path} />
        <Route element={<PanelAdministrador />} path={enlaces[3].path + enlaces[5].path} />
        <Route
          element={<ListaUsuarios />}
          path={enlaces[3].path + enlaces[5].path + enlaces[6].path}
        />
        <Route
          element={<CrearUsuario />}
          path={enlaces[3].path + enlaces[5].path + enlaces[6].path + enlaces[7].path}
        />
        <Route
          element={<InformacionUsuario />}
          path={enlaces[3].path + enlaces[5].path + enlaces[6].path + enlaces[8].path}
        />
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default App;
