import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "@/components/ToastStyle.scss";

//MODULOS
//Modulo de seguridad
import InformacionUsuario from "./modules/Seguridad/pages/InformacionUsuario";

//Pruebas
import PruebasModales from "./modules/Seguridad/pages/PruebasModales";
import PruebasToast from "./modules/Seguridad/pages/PruebasToast";

import IniciarSesion from "./modules/Seguridad/pages/IniciarSesion";
import ListaUsuarios from "./modules/Seguridad/pages/ListaUsuarios";
import PanelAdministrador from "./modules/Seguridad/pages/PanelAdministrador";
import Perfil from "./modules/Seguridad/pages/Perfil";

import RestablecerContrasenia from "./modules/Seguridad/pages/RestablecerContrasenia";
import ActualizarContrasenia from "./modules/Seguridad/pages/ActualizarContrasenia";
import CrearUsuario from "./modules/Seguridad/pages/CrearUsuario";

import { enlaces } from "./utils/rutas";

//RutasPrivadas
import PrivateRoutes from "./utils/PrivateRoutes";
import AuthContext from "./contexts/AuthContext";

//Modulo de datos alumnos
import MenuPrincipal from "./modules/DatosAlumno/MenuPrincipal";

const App = () => {
  let { user } = useContext(AuthContext);
  let id_tipo_usuario = user ? user.id_tipo_usuario : null;

  return (
    <div className="bg-blue-claro h-screen">
      <Routes>
        <Route element={<PruebasModales />} path="/prueba/modal" />
        <Route element={<PruebasToast />} path="/prueba/toast" />
        <Route
          element={<RestablecerContrasenia />}
          path={enlaces[1].prevPath + enlaces[1].path}
        />
        <Route
          element={<ActualizarContrasenia />}
          path={enlaces[2].prevPath + enlaces[2].path}
        />
        <Route
          element={<IniciarSesion />}
          path={enlaces[0].prevPath + enlaces[0].path}
        />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Navigate to="perfil/" />} />
          <Route element={<MenuPrincipal />} path={enlaces[3].path} />
          <Route
            element={<Perfil />}
            path={enlaces[4].prevPath + enlaces[4].path}
          />
          {id_tipo_usuario === 1 && (
            <>
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
            </>
          )}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
