import { useContext, useState } from 'react';

import MenuLateral from '@/components/MenuLateral';
import Listas from '@/components/Listas';

import { estudiantesAPI } from '@/api/ApiRutas.js';
import { columnsValue } from './columnsMenuPrincipal.jsx';

import AuthContext from '@/contexts/AuthContext.jsx';
import ListasContext from '@/contexts/ListasContext.jsx';
import { multiPatchModal } from '@/functions/multiMethods.js';
import ModalConfirmacion from '@/components/Modal/ModalConfirmacion.jsx';
import ModalCarga from '@/components/Modal/ModalCarga.jsx';
import ModalSucess from '@/components/Modal/ModalSucess.jsx';
import ModalError from '@/components/Modal/ModalError.jsx';
import { paramsConstructor } from '@/utils/querys.js';
import FiltrosMenuPrincipal from './FiltrosMenuPrincipal';

import './MenuPrincipal.scss';

const MenuPrincipal = () => {
  let { user, authTokens } = useContext(AuthContext);
  let { id_tipo_usuario } = user;

  let { reload, setReload } = useContext(ListasContext);

  const [params, setParams] = useState({
    estado: true,
    deuda: '',
    eliminacion_pendiente: '',
    beneficio: '',
    turno: '',
    grado: '',
    seccion: '',
    buscador: ''
  });

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
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens?.access)
    };

    const dataEliminar = {
      estado: false,
      eliminacion_pendiente: false
    };

    const dataEnviarSolicitud = {
      eliminacion_pendiente: true
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

  let queryParams = paramsConstructor(params);

  return (
    <MenuLateral>
      <div className='menu-principal h-full gap-3 min-w-[600px]'>
        <Listas
          api={estudiantesAPI}
          queryParams={queryParams}
          columnsValue={columnsValue}
          classNameTable='menu-principal-table'
          multiDelete={true}
          buttonTittle1='Eliminar'
          buttonTittle2='estudiante(s)'
          buttonFunction={handleModal}
        >
          <FiltrosMenuPrincipal
            classNameFiltros='menu-principal-filtros'
            setParams={setParams}
          />
        </Listas>
      </div>

      <ModalConfirmacion
        titulo={
          id_tipo_usuario == 1
            ? '¿Estás seguro de eliminar a este(os) estudiante(s)?'
            : '¿Estás seguro de solicitar la eliminación del(los) estudiante(s)?'
        }
        subtitulo='Esta acción podria generar cambios en el sistema'
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        func={eliminarEstudiantes}
      />

      <ModalCarga
        modalLoading={modalLoading}
        titulo={
          id_tipo_usuario == 1
            ? 'Eliminando estudiante(s)'
            : 'Enviando solicitud(es)'
        }
      />

      <ModalSucess
        titulo={
          id_tipo_usuario == 1
            ? '¡Estudiante(s) eliminado(s) exitosamente!'
            : '¡Solicitud(es) enviada(s) exitosamente!'
        }
        subtitulo=''
        modalSucessfull={modalSucessfull}
        setModalSucessfull={setModalSucessfull}
        reload={reload}
        setReload={setReload}
      />

      <ModalError
        titulo='Ups ¡Ha ocurrido un error inesperado!'
        subtitulo='Verifique su conexión a internet y vuelva a intentar la acción en unos minutos'
        modalFailed={modalFailed}
        setModalFailed={setModalFailed}
      />
    </MenuLateral>
  );
};

export default MenuPrincipal;
