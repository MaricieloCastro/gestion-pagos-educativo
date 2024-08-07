import React, { useContext, useState } from "react";

import ButtonWithIcon from "@/components/ButtonWithIcon";
import { patchModal } from "@/functions/methods";
import { estudiantesAPI } from "@/api/ApiRutas";
import AuthContext from "@/contexts/AuthContext";

import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
import ModalCarga from "@/components/Modal/ModalCarga";
import ModalError from "@/components/Modal/ModalError";
import ModalSucess from "@/components/Modal/ModalSucess";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const BotonesEstudiantesDelete = (props) => {
    let { authTokens } = useContext(AuthContext);

    const { id, setReload, reload } = props;

    // MODAL SIMPLE
    const [isModalOpen, setIsModalOpen] = useState(false);

    // CARGAS
    const [modalLoading, setModalLoading] = useState(false);
    const [modalSucessfull, setModalSucessfull] = useState(false);
    const [modalFailed, setModalFailed] = useState(false);

    const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
    };

    const url = `${estudiantesAPI}${id}/`;


    const data = {
        eliminacion_pendiente: false,
        estado: true,
    };

    const handleConfirmacion = () => {
        setIsModalOpen(true);
    };

    const handleRestaurar = () => {
        patchModal(
            url,
            data,
            headers,
            setModalLoading,
            setModalSucessfull,
            setModalFailed
        );
    };

    return (
        <div className="flex gap-2 justify-center items-center ">
            <ButtonWithIcon
                text=""
                icon={faArrowsRotate}
                classNameIcon="w-4"
                classNameVariants="rounded-sm
                bg-green-boton hover:bg-green-boton-hover
                w-10"
                onClick={handleConfirmacion}
                disabled={false}
            />

            <ModalConfirmacion
                titulo="¿Estás seguro de restaurar a este estudiante?"
                subtitulo="Esta acción podria generar cambios en el sistema"
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                func={handleRestaurar}
            />
            <ModalCarga modalLoading={modalLoading} titulo="Cargando" />
            <ModalSucess
                titulo="¡Alumno restaurado exitosamente!"
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
        </div>
    );
};

export default BotonesEstudiantesDelete;
