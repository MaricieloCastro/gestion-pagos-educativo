import React, { useContext, useState } from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosEstudiantesDelete } from "./FiltrosEstudiantesDelete/filtrosEstudiantesDelete";
import { alumnosInactivosApi, estudiantesAPI } from "@/api/ApiRutas";
import { columnsValue } from "./columnsEstudiantesDelete";

import "./EstudiantesDelete.scss";
import "./FiltrosEstudiantesDelete/FiltrosEstudiantesDelete.scss";
import AuthContext from "@/contexts/AuthContext";
import ListasContext from "@/contexts/ListasContext";
import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
import ModalCarga from "@/components/Modal/ModalCarga";
import ModalSucess from "@/components/Modal/ModalSucess";
import ModalError from "@/components/Modal/ModalError";
import { multiPatchModal } from "@/functions/multiMethods";


const MenuPrincipal = () => {

  let { authTokens } = useContext(AuthContext);
  let { reload, setReload } = useContext(ListasContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalLoading, setModalLoading] = useState(false);
  const [modalSucessfull, setModalSucessfull] = useState(false);
  const [modalFailed, setModalFailed] = useState(false);

  const [eliminadosData, setEliminadosData] = useState([])

  const handleModal = (estudiantes) => {
    setIsModalOpen(true)
    setEliminadosData(estudiantes)
  }

  const restaurarEstudiantes = async () => {

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(authTokens?.access),
    };

    const data = {
      estado: true,
    }

    await multiPatchModal(estudiantesAPI, eliminadosData, data, headers, setModalLoading, setModalSucessfull, setModalFailed)
  }

  return (
    <MenuLateral>
      <div className="estudiantes-delete h-full gap-3 min-w-[600px]">
        <Listas
          api={alumnosInactivosApi}
          columnsValue={columnsValue}
          classNameTable="estudiantes-delete-table"
          classNameFiltros="estudiantes-delete-filtros"
          filtrosLista={filtrosEstudiantesDelete}
          multiDelete={true}
          buttonTittle1="Restaurar"
          buttonTittle2="estudiante(s)"
          buttonFunction={handleModal}
        />
      </div>

      <ModalConfirmacion
        titulo="¿Estás seguro de restaurar a este(os) estudiante(s)?"
        subtitulo="Esta acción podria generar cambios en el sistema"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        func={restaurarEstudiantes}
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
  );
};

export default MenuPrincipal;
