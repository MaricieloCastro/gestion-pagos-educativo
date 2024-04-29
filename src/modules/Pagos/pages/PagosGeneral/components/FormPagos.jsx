import { useState, useEffect } from "react";
import "./FormPagos.scss";
import DatosView from "./DatosView";
import { Button } from "@/components/ui/button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AvatarCN from "@/components/AvatarCN";

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
import { MesCanceladoSelect } from "./MesCanceladoSelect";
import { AreaDesaprobadaSelect } from "./AreaDesaprobadaSelect";
import { MetodoPagoSelect } from "./MetodoPagoSelect";
import { CondicionVentaSelect } from "./CondicionVentaSelect";
import Calendario from "@/modules/Seguridad/pages/CrearUsuario/compenetes/reuse/Calendario";
//Parametro ZOD
const FormSchema = z.object({
  año_lectivo: z.string().min(1, {
    message: "El campo tiene que ser llenado",
  }),
  mes_cancelado: z.string().min(1, {
    message: "campo obligatorio",
  }),
  area_desaprobada: z.string().min(1, {
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
});
export default function FormPagos() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      año_lectivo: "",
      mes_cancelado: "",
      area_desaprobada: "",
      fecha_pago: "",
      condicion_venta: "",
      metodo_pago: "",
      descripcion: "",
      monto: "",
      monto_previo: "",
      descuento_aplicado: "",
      total_pagar: "",
    },
  });

  //tipos de pagos
  const [buttonCD, setButtonCD] = useState();
  const [buttonM, setButtonM] = useState();

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
  console.log(buttonCD, buttonM);
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
  const name = "SHANDE ANDRES ALVAN RIOS";
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="pagos">
          <div className="pagos-alumno">
            <div className="pagos-alumno_foto">
              <AvatarCN />
            </div>
            <div className="pagos-alumno_datos">
              <div className="pagos-alumno_datos-nombres">{name}</div>
              <DatosView celda="DNI:" dato="71456922" />
              <DatosView celda="BENEFIO:" dato="DEPORTISTA"></DatosView>
              <DatosView celda="TURNO:" dato="TARDE"></DatosView>
              <div className="pagos-alumno_datos-año">
                <DatosView celda="GRADO:" dato="5" />
                <DatosView celda="SECCIÓN:" dato="C" />
              </div>
            </div>
            <div className="pagos-alumno_botones">
              <div className="pagos-alumno_botones-informacion">
                <Button>
                  <ModeEditIcon /> INFORMACIÓN
                </Button>
              </div>
              {mostrarBotones && (
                <>
                  <Button>HISTORIAL DE PAGOS</Button>
                  <Button onClick={mensualidad} type="button">
                    MENSUALIDAD
                  </Button>
                  <Button type="button" onClick={matricula}>
                    MATRICULA
                  </Button>
                  <Button type="button" onClick={cursoD}>
                    CURSO DESAPROBADO
                  </Button>
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
                <MesCanceladoSelect form={form} disabled={buttonM} />
                <AreaDesaprobadaSelect form={form} disabled={buttonCD} />
              </div>
              <div className="pagos-dato_uno-dos">
                <Calendario
                  nameLabel="Fecha de Pago:"
                  form={form}
                  name="fecha_pago"
                />
                <CondicionVentaSelect form={form} />
                <MetodoPagoSelect form={form} />
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
