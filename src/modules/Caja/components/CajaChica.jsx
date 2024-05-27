import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import "./CajaChica.scss";
import { Button } from "@/components/ui/button";
import TablaMovimientos from "./TablaMovimientos";
import moment from "moment";
import { Modal } from "antd";
import ModalSimple from "@/components/Modal/ModalSimple";
import {
  AperturaAPI,
  AperturaCajaAPI,
  AperturaMovimientoAPI,
} from "@/api/ApiRutas";
//Formulario
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Formulario from "@/modules/DatosAlumno/pages/InscribirAlumno/components/formulario";
import { set } from "date-fns";
import TableApertura from "./TableApertura";
import { filtrosAperturaMovimiento } from "./FiltrosAperturaMovimiento";
import { columnsAperturaMovimiento } from "./ColumnasAperturaMoviento";
import Listas from "@/components/Listas";
import { columnsAperturaCaja } from "./ColumnasAperturaCaja";
import { getAxios, postAxios } from "@/functions/methods";
import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
import { Value } from "sass";
const FormSchema = z.object({
  id_caja: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  id_turno_caja: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  descripcion: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  fecha_apertura: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  monto_inicial: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  tipo_movimiento: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
});
const FormSchemaI = z.object({
  descripcion: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  fecha_apertura: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  total: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  tipo_movimiento: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
});
export default function CajaChica(props) {
  //Props proveniente del componenete de CAJA
  const { cajaDatos } = props;
  const CajaActiva = cajaDatos[0];
  console.log(CajaActiva.estado);
  const fecha = moment().format("DD MMMM, HH:mm");
  const fecha_apertura = moment().format("YYYY-MM-DD, HH:mm:ss");
  console.log(fecha_apertura);
  //Variables globales
  let { user, estadoCaja, EstadoCajaSet, EstadoCajaSetZ, authTokens } =
    useContext(AuthContext);

  useEffect(() => {
    if (CajaActiva.estado == true) {
      EstadoCajaSet();
    } else {
      EstadoCajaSetZ();
    }
  }, []);

  //Aquí identidicamos al tipo de usuario
  let tipoUsuario = "";
  const { nombres, apellido_paterno, apellido_materno, id_tipo_usuario } = user;
  if (id_tipo_usuario == 1) {
    tipoUsuario = "Administrador de sistema";
  } else {
    tipoUsuario = "Secretaria(o)";
  }
  const comle = `${nombres} ${apellido_paterno} ${apellido_materno}`;
  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Identificador de estado de los valores del formularios
  const [estadoValue, setEstadoValues] = useState();

  //Función para abrir el modal
  const showModal = (estadoValue) => {
    if (estadoValue != undefined) {
      setIsModalOpen(true);
      setDisableA(true);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setDisableA(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //Formulario
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id_caja: "1",
      id_turno_caja: "1",
      descripcion: "APERTURA DE CAJA",
      fecha_apertura: fecha_apertura,
      monto_inicial: "",
      tipo_movimiento: "INGRESO",
    },
  });
  const formI = useForm({
    resolver: zodResolver(FormSchemaI),
    defaultValues: {
      descripcionI: "",
      fechaI: fecha_apertura,
      totalI: "",
      tipo_movimientoI: "",
      id_aperturaI: "1",
    },
  });
  //Función para bloqeuar el boton de apertura hasta que cierre para poder abrir otra vez
  //Para el estado del disable del boton Aperturar Caja
  const [disableA, setDisableA] = useState();
  const [caja, SetCaja] = useState(false);
  const [reload, setReload] = useState();
  //Para resivir los datos del get o del post
  const [general, setGeneral] = useState();
  const [loading, setLoading] = useState();
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };

  //Función que se activa dentro del modal
  async function ModalCaja() {
    await postAxios(AperturaAPI, estadoValue, headers, reload, setReload);
    console.log(general);
    SetCaja(estadoValue.monto_inicial);
    //EstadoCajaSet();
    setDisableA(true);
  }
  // const [estadoCaja, setEstadoCaja] = useState(false);

  function onClick(values) {
    setEstadoValues(values);
    showModal(estadoCaja);
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onClick)}>
        <div className="caja">
          <div className="caja-uno">
            <div className="caja-uno_uno">
              <div className="caja-uno_uno-usuario">
                <div>
                  <h1>
                    {comle} - {tipoUsuario}
                  </h1>
                  <h1>{fecha}</h1>

                  {estadoCaja ? (
                    <div className=" estado bg-green-boton text-white">
                      Caja Abierta
                    </div>
                  ) : (
                    <div className=" estado bg-red-boton text-white">
                      Caja Cerrada
                    </div>
                  )}
                </div>
                <div className="caja-uno_uno-usuario-reprotes mr-2">
                  <Button>
                    Generar Reporte <FontAwesomeIcon icon={faFilePdf} />
                  </Button>
                </div>
              </div>
              <div>
                <div>
                  <div className="caja-uno_uno-form">
                    <Formulario
                      form={form}
                      readOnly={true}
                      nameLabel="Descripcion:"
                      parametros="descripcion"
                    />
                    <Formulario
                      form={form}
                      readOnly={true}
                      nameLabel="Tipo Moviento:"
                      parametros="tipo_movimiento"
                    />
                    <Formulario
                      form={form}
                      nameLabel="Monto:"
                      parametros="monto_inicial"
                      type="number"
                    />
                  </div>
                </div>
              </div>
              <div className="caja-uno_uno-botones">
                <Button
                  className="caja-uno_dos-botones-uno bg-green-boton "
                  // onClick={() => showModal(estadoValue)}
                  disabled={disableA}
                >
                  Aperturar Caja
                </Button>
                <Button
                  className="caja-uno_dos-botones-uno bg-red-boton-listas"
                  type="reset"
                  onClick={() => setDisableA(false)}
                >
                  Cerrar Caja
                </Button>
              </div>
            </div>
            <div className="caja-uno_dos">
              <div className="caja-uno_dos-tabla">
                <TablaMovimientos caja={caja} />
              </div>
              <div className="caja-uno_dos-botones">
                <Button
                  className="caja-uno_dos-botones-uno bg-green-boton "
                  type="button"
                  onClick={showModal}
                >
                  Nuevo Movimiento
                </Button>
                {/* <Modal
                  className="caja-uno_dos-botones-modal"
                  title="Nuevo Movimiento:"
                  open={isModalOpen}
                  onCancel={handleCancel}
                >
                  <form onSubmit={form.handleSubmit(onClick)}>
                    <div className="hola">
                      <Formulario
                        form={formI}
                        nameLabel="Descripcion:"
                        parametros="descripcionI"
                      />
                      <Formulario
                        form={formI}
                        nameLabel="Tipo Moviento:"
                        parametros="tipo_movimientoI"
                      />
                      <Formulario
                        form={formI}
                        nameLabel="Monto:"
                        parametros="totalI"
                        type="number"
                      />
                    </div>
                    <Button type="primary" htmlType="submit">
                      Guardar
                    </Button>
                  </form>
                </Modal> */}
              </div>
            </div>
          </div>
          <div className="caja-dos">
            <div className="bg-white-cabecera p-1.5">
              <Listas
                api={AperturaMovimientoAPI}
                columnsValue={columnsAperturaMovimiento}
                classNameTable="apertura-movimiento-table"
                classNameFiltros="apertura-movimiento-filtros"
                filtrosLista={filtrosAperturaMovimiento}
                multiDelete={false}
                buttonTittle1="Eliminar"
                buttonTittle2="estudiante(s)"
              />
            </div>
          </div>
        </div>
        <ModalConfirmacion
          titulo="¿Estás seguro de realizar la Apertura de caja?"
          subtitulo="Apertura de Caja"
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          func={ModalCaja}
        />
      </form>
    </Form>
  );
}
