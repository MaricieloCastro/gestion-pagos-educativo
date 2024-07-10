import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import "./CajaChica.scss";
import { Button } from "@/components/ui/button";
import TablaMovimientos from "./TablaMovimientos";
//Reprote
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfMovimientosDia from "./PdfMovimientosDia";
import moment from "moment";
import CancelIcon from "@mui/icons-material/Cancel";
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
import { getAxios, postAxiosPrueba, putAxiosPrueba } from "@/functions/methods";
import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
import { Value } from "sass";
import ModalCarga from "@/components/Modal/ModalCarga";
import ModalSucess from "@/components/Modal/ModalSucess";
import ModalCajaMovimiento from "@/components/Modal/ModalCajaMovimiento";
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
  const { cajaDatos, movimiento, movimientos } = props;
  const { total } = movimiento;
  const CajaActiva = cajaDatos[0];
  const fecha = moment().format("DD MMMM, HH:mm");
  const fecha_apertura = moment().format("YYYY-MM-DD, HH:mm:ss");
  //Variables globales
  let { user, estadoCaja, EstadoCajaSet, EstadoCajaSetZ, authTokens } =
    useContext(AuthContext);

  useEffect(() => {
    if (CajaActiva.estado == true) {
      EstadoCajaSet();
      setDisableA(true);
    } else {
      EstadoCajaSetZ();
      setDisableA(false);
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
  const [isModalOpenB, setIsModalOpenB] = useState(false);

  //MODAL MOVIMIENTOS
  const [isModalOpenC, setIsModalOpenC] = useState(false);

  //Identificador de estado de los valores del formularios
  const [estadoValue, setEstadoValues] = useState();

  //Función para abrir el modal
  const showModal = (estadoValue) => {
    if (estadoValue != undefined) {
      setIsModalOpen(true);
      setDisableA(true);
    }
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
  //Función para bloqeuar el boton de apertura hasta que cierre para poder abrir otra vez
  //Para el estado del disable del boton Aperturar Caja
  const [disableA, setDisableA] = useState();
  const [caja, SetCaja] = useState(false);
  const [reload, setReload] = useState(false);
  //Para resivir los datos del get o del post
  const [general, setGeneral] = useState();
  const [totalCaja, setTotalCaja] = useState(CajaActiva.monto_inicial);
  const [loading, setLoading] = useState();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [sucess, setSucces] = useState();
  const [titulo, setTitulo] = useState("APERTURANDO CAJA");
  const [tituloI, setTituloI] = useState("CAJA APERTURADA CORRECTAMENTE");
  const [modalSucessfull, setModalSucessfull] = useState(false);
  const [modalSucessfullI, setModalSucessfullI] = useState(false);
  const [estadoCajaLocal, setEstadoCajaLocal] = useState();
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };

  //Para actualizar la pagaina después del post o del put
  function recargar() {
    window.location.reload();
    setReload(false);
  }
  //
  if (reload) {
    recargar();
  }
  function CierreCaja() {
    setTitulo("CERRANDO CAJA");
    setTituloI("CAJA CERRADA CORRECTAMENTE");
    setLoading(true);
    CajaActiva.fecha_cierre = fecha_apertura;
    CajaActiva.monto = 0;
    CajaActiva.estado = false;
    const url = `http://127.0.0.1:8000/caja/api/apertura/${CajaActiva.id}/`;
    putAxiosPrueba(
      url,
      CajaActiva,
      headers,
      setLoading,
      setModalSucessfull,
      setError,
      setOpen
    );
    localStorage.setItem("estadoCaja", JSON.stringify(false));
    setEstadoCajaLocal(true);
  }
  //URL
  const CAJAACTIVAAPI = `http://127.0.0.1:8000/caja/api/apertura-movimiento/?id_apertura=${CajaActiva.id}`;
  //Función que se activa dentro del modal
  async function ModalCaja() {
    setLoading(true);
    await postAxiosPrueba(
      AperturaAPI,
      estadoValue,
      headers,
      setLoading,
      setModalSucessfull,
      setError
    );
    localStorage.setItem("estadoCaja", JSON.stringify(true));
    console.log(general);
    SetCaja(estadoValue.monto_inicial);
    setDisableA(true);
  }
  // const [estadoCaja, setEstadoCaja] = useState(false);
  function onClick(values) {
    setEstadoValues(values);
    showModal(estadoCaja);
    console.log(values);
  }
  function ValidacionCaja() {
    if (estadoCaja) {
      setIsModalOpenC(true);
    } else {
      setModalSucessfullI(true);
    }
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
                  <PDFDownloadLink
                    document={<PdfMovimientosDia data={movimientos} />}
                    fileName="PagosMatricula.pdf"
                  >
                    <Button type="button">
                      Generar Reporte <FontAwesomeIcon icon={faFilePdf} />
                    </Button>
                  </PDFDownloadLink>
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
                  onClick={() => showModal(estadoValue)}
                  disabled={disableA}
                >
                  Aperturar Caja
                </Button>
                <Button
                  className="caja-uno_dos-botones-uno bg-red-boton-listas"
                  type="reset"
                  onClick={() => setIsModalOpenB(true)}
                >
                  Cerrar Caja
                </Button>
              </div>
            </div>
            <div className="caja-uno_dos">
              <div className="caja-uno_dos-tabla">
                <TablaMovimientos caja={total} />
              </div>
              <div className="caja-uno_dos-botones">
                <Button
                  className="caja-uno_dos-botones-uno bg-green-boton "
                  type="button"
                  onClick={ValidacionCaja}
                >
                  Nuevo Movimiento
                </Button>
              </div>
            </div>
          </div>
          <div className="caja-dos">
            <div className="bg-white-cabecera p-1.5">
              <Listas
                api={CAJAACTIVAAPI}
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
        <ModalConfirmacion
          titulo="¿Estás seguro de realizar el cierre de caja?"
          subtitulo="Cierre de Caja"
          isModalOpen={isModalOpenB}
          setIsModalOpen={setIsModalOpenB}
          func={CierreCaja}
        />
        <ModalCarga modalLoading={loading} titulo={titulo} />
        <ModalSucess
          titulo={tituloI}
          subtitulo=""
          modalSucessfull={modalSucessfull}
          setModalSucessfull={setModalSucessfull}
          reload={reload}
          setReload={setReload}
        />
        <ModalCajaMovimiento
          CajaActiva={CajaActiva}
          isModalOpen={isModalOpenC}
          setIsModalOpen={setIsModalOpenC}
          total={total}
          id={CajaActiva.id}
        />
        <ModalSucess
          titulo="¡Error! ¡Caja Cerrada!"
          subtitulo="Caja Cerrada"
          modalSucessfull={modalSucessfullI}
          setModalSucessfull={setModalSucessfullI}
        ></ModalSucess>
      </form>
    </Form>
  );
}
