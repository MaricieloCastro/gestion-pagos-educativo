import { useState, useEffect } from "react";
import "./FormPagos.scss";
import DatosView from "./DatosView";
import { Button } from "@/components/ui/button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AvatarPagos from "./AvatarPagos";
import moment from "moment";
//URL
import {
  AREAURL,
  MESESURL,
  METODOPAGOURL,
  TIPOPAGOURL,
} from "@/modules/Seguridad/pages/CrearUsuario/compenetes/reuse/ConstObj";
import { SelectForm } from "@/modules/Seguridad/pages/CrearUsuario/components/ui/SelectForm";
//Importaciones para el formularioI
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormularioPagos from "./formularioPagos";
import Formulario from "@/modules/Seguridad/pages/CrearUsuario/components/ui/formulario";
import { CondicionVentaSelect } from "./CondicionVentaSelect";
import Calendario from "@/modules/Seguridad/pages/CrearUsuario/compenetes/reuse/Calendario";
import { Link, useParams } from "react-router-dom";

//Parametro ZOD
const FormSchema = z.object({
  año_lectivo: z.string().min(1, {
    message: "El campo tiene que ser llenado",
  }),
  mes_cancelado: z.string().min(0, {
    message: "campo obligatorio",
  }),
  area_desaprobada: z.string().min(0, {
    message: "campo obligatorio",
  }),
  fecha_pago: z.string().min(1, {
    message: "campo obligatorio",
  }),
  condicion_venta: z.string().min(1, {
    message: "campo obligatorio",
  }),
  metodo_pago: z.string().min(1, {
    message: "campo obligatorio",
  }),
  descripcion: z.string().min(1, {
    message: "campo obligatorio",
  }),
  monto: z.string().min(1, {
    message: "campo obligatorio",
  }),
  monto_previo: z.string().min(1, {
    message: "campo obligatorio",
  }),
  descuento_aplicado: z.string().min(1, {
    message: "campo obligatorio",
  }),
  total_pagar: z.string().min(1, {
    message: "campo obligatorio",
  }),
  tipo_pago: z.string().min(1, {
    message: "campo obligatorio",
  }),
});
export default function FormPagos(props) {
  const { general, tipo_pago } = props;
  const fechaDefault = moment();
  const fecha = fechaDefault.format("YYYY-MM-DD");
  const año = fechaDefault.format("YYYY");
  const param = useParams();
  const { pagos, id } = param;
  const { descripcion } = tipo_pago[pagos];
  //const [tipoPago, setTipoPago] = useState();
  //Lógica para designar los inpust que estarán disponibless
  const tipoPago = pagos;
  useEffect(() => {
    if (pagos == 1) {
      matricula();
    } else if (pagos == 2) {
      mensualidad();
    } else {
      cursoD();
    }
  }, []);
  //Lógica para recargar la página cada que cambiamos el tipo de pago
  const [reload, setReload] = useState();
  //Funcion de recargar
  function recargar() {
    window.location.reload();
    setReload(false);
  }
  //Esa función solo se ejecutará si el valor de reload es True, y para
  //no crear un loop infinito entonces cambiamos de valor en la función a reload a false
  //no olvidemos que es un hook
  if (reload) {
    recargar();
  }
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      año_lectivo: año || "",
      mes_cancelado: "",
      area_desaprobada: "",
      fecha_pago: fecha || "",
      condicion_venta: "ALCONTADO",
      metodo_pago: "EFECTIVO",
      descripcion: descripcion || "",
      monto: "",
      monto_previo: "",
      descuento_aplicado: "",
      total_pagar: "",
      tipo_pago: tipoPago,
    },
  });
  //tipos de pagos
  const [buttonCD, setButtonCD] = useState();
  const [buttonM, setButtonM] = useState();
  const { alumno, codigo, beneficio, turno, grado, seccion, estado } = general;

  function mensualidad() {
    setButtonCD(true);
    setButtonM(false);
  }
  function matricula() {
    setButtonCD(true);
    setButtonM(true);
  }
  function cursoD() {
    setButtonCD(false);
    setButtonM(true);
  }
  //console.log(buttonCD, buttonM);
  //Se actualiza el token
  //Cambia de color el label
  function onSubmit(values) {
    console.log(values);
  }
  const ButtonView = false;
  //Lógica para no rendirizar los botones de pagos
  const [mostrarBotones, setMostrarBotones] = useState(true);
  useEffect(() => {
    // Lógica para determinar si mostrar o no el botón
    const usuarioEnInicio = ButtonView; // Cambia esto a tu lógica real
    if (usuarioEnInicio) {
      setMostrarBotones(true);
    } else {
      setMostrarBotones(false);
    }
  }, []);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="pagos">
          <div className="pagos-alumno">
            <div className="pagos-alumno_foto">
              <AvatarPagos estado={estado} />
            </div>
            <div className="pagos-alumno_datos">
              <div className="pagos-alumno_datos-nombres">{alumno}</div>
              <DatosView celda="DNI:" dato={codigo} />
              <DatosView celda="BENEFIO:" dato={beneficio}></DatosView>
              <DatosView celda="TURNO:" dato={turno}></DatosView>
              <div className="pagos-alumno_datos-año">
                <DatosView celda="GRADO:" dato={grado} />
                <DatosView celda="SECCIÓN:" dato={seccion} />
              </div>
            </div>
            <div className="pagos-alumno_botones">
              <div className="pagos-alumno_botones-informacion">
                <Button type="button">
                  <ModeEditIcon /> INFORMACIÓN
                </Button>
              </div>
              {mostrarBotones && (
                <>
                  <Button type="button">HISTORIAL DE PAGOS</Button>
                  <Link to={`http://localhost:5173/pagos/43/${2}`}>
                    <Button
                      onClick={() => {
                        setReload(true);
                        mensualidad();
                      }}
                      type="button"
                    >
                      MENSUALIDAD
                    </Button>
                  </Link>
                  <Link to={`http://localhost:5173/pagos/43/${1}`}>
                    <Button
                      type="button"
                      onClick={() => {
                        setReload(true);
                        matricula();
                      }}
                    >
                      MATRICULA
                    </Button>
                  </Link>
                  <Link to={`http://localhost:5173/pagos/43/${3}`}>
                    <Button
                      type="button"
                      onClick={() => {
                        setReload(true);
                        cursoD();
                      }}
                    >
                      CURSO DESAPROBADO
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="pagos-dato">
            <div className="pagos-dato_uno">
              <div className="pagos-dato_uno-uno">
                <Formulario
                  form={form}
                  nameLabel="Año Lectivo:"
                  parametros="año_lectivo"
                />
                {/* <MesCanceladoSelect form={form} disabled={buttonM} /> */}
                <SelectForm
                  form={form}
                  disabled={buttonM}
                  url={MESESURL}
                  dato=""
                  nameLabel="Mes Cancelado:"
                  parametros="mes_cancelado"
                />
                <SelectForm
                  form={form}
                  disabled={buttonCD}
                  url={AREAURL}
                  dato=""
                  nameLabel="Curso Desaprobada:"
                  parametros="area_desaprobada"
                />
              </div>
              <div className="pagos-dato_uno-dos">
                <Calendario
                  className="flex-container"
                  nameLabel="Fecha de Pago:"
                  form={form}
                  name="fecha_pago"
                />
                <CondicionVentaSelect form={form} dato="ALCONTADO" />
                <SelectForm
                  form={form}
                  url={METODOPAGOURL}
                  dato="EFECTIVO"
                  nameLabel="Metodo de Pago:"
                  parametros="metodo_pago"
                />
                <Formulario
                  form={form}
                  nameLabel="Descripción:"
                  parametros="descripcion"
                />
              </div>
            </div>
            <div className="pagos-dato_dos">
              <FormularioPagos
                form={form}
                nameLabel="Monto:"
                parametros="monto"
              />
              <FormularioPagos
                form={form}
                nameLabel="Monto Previo:"
                parametros="monto_previo"
              />
              <FormularioPagos
                form={form}
                nameLabel="Descuento Aplicado:"
                parametros="descuento_aplicado"
              />
              <FormularioPagos
                form={form}
                nameLabel="Total a Pagar:"
                parametros="total_pagar"
              />
              <Button className="registrar-pago">REGISTRAR PAGO</Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
