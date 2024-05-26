import React, { useContext, useState } from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosMenuPrincipal } from "./FiltrosMenuPrincipal/filtrosMenuPrincipal";
import { alumnosApi, estudiantesAPI } from "@/api/ApiRutas";
import { columnsValue } from "./columnsMenuPrincipal.jsx";

import "./MenuPrincipal.scss";
import "./FiltrosMenuPrincipal/FiltrosMenuPrincipal.scss";
import AuthContext from "@/contexts/AuthContext";
import ListasContext from "@/contexts/ListasContext";
import { multiPatchModal } from "@/functions/multiMethods";
import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
import ModalCarga from "@/components/Modal/ModalCarga";
import ModalSucess from "@/components/Modal/ModalSucess";
import ModalError from "@/components/Modal/ModalError";

const MenuPrincipal = () => {
  let { user, authTokens } = useContext(AuthContext);
  let { id_tipo_usuario } = user;

  let { reload, setReload } = useContext(ListasContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalLoading, setModalLoading] = useState(false);
  const [modalSucessfull, setModalSucessfull] = useState(false);
  const [modalFailed, setModalFailed] = useState(false);

  const [estudiantesData, setEstudiantesData] = useState([]);

  const handleModal = (estudiantes) => {
    setIsModalOpen(true);
    setEstudiantesData(estudiantes);
  };

  const eliminarEstudiantes = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(authTokens?.access),
    };

    const dataEliminar = {
      estado: false,
      eliminacion_pendiente: false,
    };

    const dataEnviarSolicitud = {
      eliminacion_pendiente: true,
    };

    await multiPatchModal(
      estudiantesAPI,
      estudiantesData,
      id_tipo_usuario === 1 ? dataEliminar : dataEnviarSolicitud,
      headers,
      setModalLoading,
      setModalSucessfull,
      setModalFailed
    );
  };

  return (
    <MenuLateral>
      <div className="menu-principal h-full gap-3 min-w-[600px]">
        <Listas
          api={alumnosApi}
          columnsValue={columnsValue}
          classNameTable="menu-principal-table"
          classNameFiltros="menu-principal-filtros"
          filtrosLista={filtrosMenuPrincipal}
          multiDelete={true}
          buttonTittle1="Eliminar"
          buttonTittle2="estudiante(s)"
          buttonFunction={handleModal}
        />
      </div>

      <ModalConfirmacion
        titulo={
          id_tipo_usuario == 1
            ? "¿Estás seguro de eliminar a este(os) estudiante(s)?"
            : "¿Estás seguro de solicitar la eliminación del(los) estudiante(s)?"
        }
        subtitulo="Esta acción podria generar cambios en el sistema"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        func={eliminarEstudiantes}
      />

      <ModalCarga
        modalLoading={modalLoading}
        titulo={
          id_tipo_usuario == 1
            ? "Eliminando estudiante(s)"
            : "Enviando solicitud(es)"
        }
      />

      <ModalSucess
        titulo={
          id_tipo_usuario == 1
            ? "¡Estudiante(s) eliminado(s) exitosamente!"
            : "¡Solicitud(es) enviada(s) exitosamente!"
        }
        subtitulo=""
        modalSucessfull={modalSucessfull}
        setModalSucessfull={setModalSucessfull}
        reload={reload}
        setReload={setReload}
      />

      <ModalError
        titulo="Ups ¡Ha ocurrido un error inesperado!"
        subtitulo="Verifique su conexión a internet y vuelva a intentar la acción en unos minutos"
        modalFailed={modalFailed}
        setModalFailed={setModalFailed}
      />
    </MenuLateral>
  );
};

export default MenuPrincipal;
