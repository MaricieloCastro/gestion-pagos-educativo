import React, { useContext } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
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

import PagosGeneral from "./modules/Pagos/pages/PagosGeneral";
import PagoInscripcion from "./modules/Pagos/pages/PagoInscripcion";

import { enlaces } from "./utils/rutas";

//RutasPrivadas
import PrivateRoutes from "./utils/PrivateRoutes";
import AuthContext from "./contexts/AuthContext";

//Modulo de datos alumnos

import MenuPrincipal from "./modules/DatosAlumno/pages/MenuPrincipal";
import InscribirAlumno from "./modules/DatosAlumno/pages/InscribirAlumno/InscribirAlumno";
import EstudiantesDelete from "./modules/DatosAlumno/pages/EstudiantesDelete";
import SolicitudEstudiantesDelete from "./modules/DatosAlumno/pages/SolicitudEstudiantesDelete";
import HistorialReporte from "./modules/Reportes/pages/HistorialReporte";

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
          <Route path="/" element={<Navigate to={enlaces[3].path} />} />
          <Route element={<MenuPrincipal />} path={enlaces[3].path} />
          <Route
            element={<Perfil />}
            path={enlaces[4].prevPath + enlaces[4].path}
          />
          <Route
            element={<PagosGeneral />}
            path={enlaces[9].prevPath + enlaces[9].path}
          />

          {id_tipo_usuario === 1 && (
            <>
              <Route
                element={<PanelAdministrador />}
                path={enlaces[5].prevPath + enlaces[5].path}
              />
              <Route
                element={<SolicitudEstudiantesDelete />}
                path={enlaces[12].prevPath + enlaces[12].path}
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
          <Route
            element={<InscribirAlumno />}
            path={enlaces[10].prevPath + enlaces[10].path}
          />
          <Route
            element={<EstudiantesDelete />}
            path={enlaces[11].prevPath + enlaces[11].path}
          />
          <Route
            element={<HistorialReporte />}
            path={enlaces[13].prevPath + enlaces[13].path}
          />

        </Route>
        <Route
          element={
            <>
              <div className="h-screen flex justify-center items-center flex-col gap-4">
                <h1 className="text-6xl">ERROR 404</h1>
                <p>PAGE NOT FOUND</p>
                <p className="text-slate-400">
                  <Link to="/">Regresar a inicio de sesión</Link>
                </p>
              </div>
            </>
          }
          path="*"
        />
      </Routes>
    </div>
  );
};

export default App;
