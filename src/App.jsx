import React from "react";
import { Routes, Route } from "react-router-dom";

//MODULOS
//Modulo de seguridad
import InformacionUsuario from "./modules/Seguridad/pages/InformacionUsuario";

//Pruebas
import PruebasModales from "../src/modules/Seguridad/pages/PruebasModales";
import PruebasToast from "../src/modules/Seguridad/pages/PruebasToast";

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
        <Route element={<PruebasModales />} path="/Pruebas/Modal" />
        <Route element={<PruebasToast />} path="/Pruebas/toast" />
        <Route
          element={<IniciarSesion />}
          path={enlaces[0].prevPath + enlaces[0].path}
        />
        <Route
          element={<RestablecerContrasenia />}
          path={enlaces[1].prevPath + enlaces[1].path}
        />
        <Route
          element={<ActualizarContrasenia />}
          path={enlaces[2].prevPath + enlaces[2].path}
        />
        {/* <Route element={<PrivateRoutes />}> */}
        <Route element={<MenuPrincipal />} path={enlaces[3].path} />
        <Route
          element={<Perfil />}
          path={enlaces[4].prevPath + enlaces[4].path}
        />
        <Route
          element={<PanelAdministrador />}
          path={enlaces[5].prevPath + enlaces[5].path}
        />
        <Route
          element={<ListaUsuarios />}
          path={enlaces[6].prevPath + enlaces[6].path}
        />
        <Route
          element={<CrearUsuario />}
          path={enlaces[7].prevPath + enlaces[7].path}
        />
        <Route
          element={<InformacionUsuario />}
          path={enlaces[8].prevPath + enlaces[8].path}
        />
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default App;
