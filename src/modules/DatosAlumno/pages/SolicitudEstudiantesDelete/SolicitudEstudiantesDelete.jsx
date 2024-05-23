
import React, { useContext, useState } from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosSolicitudEstudiantesDelete } from "./FiltrosSolicitudEstudiantesDelete/filtrosSolicitudEstudiantesDelete";
import { alumnosSolicitudDeleteApi, estudiantesAPI } from "@/api/ApiRutas";
import { columnsValue } from "./columnsSolicitudEstudiantesDelete";

import "./SolicitudEstudiantesDelete.scss";
import "./FiltrosSolicitudEstudiantesDelete/FiltrosSolicitudEstudiantesDelete.scss";
import AuthContext from "@/contexts/AuthContext";
import ListasContext from "@/contexts/ListasContext";
import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
import ModalSucess from "@/components/Modal/ModalSucess";
import ModalCarga from "@/components/Modal/ModalCarga";
import ModalError from "@/components/Modal/ModalError";
import { multiPatchModal } from "@/functions/multiMethods";

const SolicitudEstudiantesDelete = () => {

  let { authTokens } = useContext(AuthContext);
  let { reload, setReload } = useContext(ListasContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalLoading, setModalLoading] = useState(false);
  const [modalSucessfull, setModalSucessfull] = useState(false);
  const [modalFailed, setModalFailed] = useState(false);

  const [solicitudesData, setSolicitudesData] = useState([])

  const handleModal = (estudiantes) => {
    setIsModalOpen(true)
    setSolicitudesData(estudiantes)
  }

  const rechazarSolicitudes = async () => {

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(authTokens?.access),
    };

    const data = {
      eliminacion_pendiente: false,
    }

    await multiPatchModal(estudiantesAPI, solicitudesData, data, headers, setModalLoading, setModalSucessfull, setModalFailed)
  }

  return (
    <MenuLateral>
      <div className="estudiantes-delete h-full gap-3 min-w-[600px]">
        <Listas
          api={alumnosSolicitudDeleteApi}
          columnsValue={columnsValue}
          classNameTable="solicitud-estudiantes-delete-table"
          classNameFiltros="solicitud-estudiantes-delete-filtros"
          filtrosLista={filtrosSolicitudEstudiantesDelete}
          multiDelete={true}
          buttonTittle1="Rechazar"
          buttonTittle2="solicitud(es)"
          buttonFunction={handleModal}
        />
      </div>

      <ModalConfirmacion
        titulo="¿Estás seguro rechazar la eliminación de este estudiante?"
        subtitulo="Esta acción podria generar cambios en el sistema"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        func={rechazarSolicitudes}
      />

      <ModalCarga modalLoading={modalLoading} titulo="Cargando" />

      <ModalSucess
        titulo="¡Acción realizada exitosamente!"
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
  )
}

export default SolicitudEstudiantesDelete
