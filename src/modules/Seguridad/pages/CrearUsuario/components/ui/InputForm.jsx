import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Formulario from "./formulario";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import "./formUsario.scss";

import { PlusOutlined } from "@ant-design/icons";
//Enlaces
import { Link } from "react-router-dom";
//Para la imagen
//Radio
import { RadioGroupForm } from "./RadioGroupForm";
//Componenete tipo de usuario
import { TipoUsarioSelect } from "./TipoUsarioSelect";
//Calendario
import Calendario from "../../compenetes/reuse/Calendario";
//API
// Lógica del componente
const FormSchema = z.object({
  //Contra cuátos caracteres hay en el input
  nombre: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  // APpaterno: z.string().min(1, {
  //   message: "Campo Obligatorio",
  // }),
  // APmaterno: z.string().min(1, {
  //   message: "Campo Obligatorio",
  // }),
  dni: z.string().min(8, {
    message: "Campo Obligatorio",
  }),
  telefono: z.string().min(9, {
    message: "Campo Obligatorio",
  }),
  direccion: z.string().min(10, {
    message: "Campo Obligatorio",
  }),
  edad: z.string().min(2, {
    message: "Campo Obligatorio",
  }),
  correo: z.string().min(10, {
    message: "Campo Obligatorio",
  }),
  sexo: z.string().min(0, {
    message: "Campo Obligatorio",
  }),
  usuario: z.string().min(0, {
    message: "Campo Obligatorio",
  }),
  contraseña: z.string().min(0, {
    message: "Campo Obligatorio",
  }),
  tipo_usuario: z.string().min(0, {
    message: "Campo Obligatorio",
  }),
  fecha_nacimiento: z.string().min(0, {
    message: "Campo Obligatorio",
  }),
});

//Lógica de programación
function onSubmit(data) {
  toast({
    title: "You submitted the following values:",
    description:
      '<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">' +
      '<code className="text-white">' +
      JSON.stringify(data, null, 2) +
      "</code>" +
      "</pre>",
  });
}

export default function InputFormI(props) {
  const { disabled, ButtonView, textButton, usuarios } = props;
  const {
    nombres,
    apellido_materno,
    apellido_paterno,
    dni,
    celular,
    domicilio,
    edad,
    email,
    sexo,
    username,
    password,
    tipo_usuario,
    ruta_fotografia,
    fecha_nacimiento,
  } = usuarios || {};
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: nombres || "",
      apellido_paterno: apellido_paterno || "",
      apellido_materno: apellido_materno || "",
      dni: dni || "",
      telefono: celular || "",
      direccion: domicilio || "",
      edad: "20" || "",
      correo: email || "",
      sexo: sexo || "",
      usuario: username || "",
      contraseña: password || "",
      tipo_usuario: "",
      fecha_nacimiento: "",
    },
  });
  function onSubmit(values) {
    console.log(values);
  }
  //Para mostrar o no el boton según la página
  const [mostrarBoton, setMostrarBoton] = useState(true);
  useEffect(() => {
    // Lógica para determinar si mostrar o no el botón
    const usuarioEnInicio = ButtonView; // Cambia esto a tu lógica real
    if (usuarioEnInicio) {
      setMostrarBoton(true);
    } else {
      setMostrarBoton(false);
    }
  }, []);
  return (
    <Form {...form}>
      <div className="fotografia">
        <img src={ruta_fotografia} />
        <div className="imp">
          Fotografia:
          {/* <InputFile /> */}
          <Button
            className={buttonVariants({
              variant: "default",
              className: "rounded-none",
            })}
          >
            Cargar Foto
          </Button>
        </div>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Este es la sección del contenedor */}
        <div className="usario-datos">
          <h2>DATOS PERSONALES: </h2>
          <div className="usario-datos_nombres">
            {/* Inp Nombres */}
            <Formulario
              form={form}
              nameLabel="NOMBRES:"
              parametros="nombre"
              disabled={disabled}
              //dato={nombre}
            />
            <Formulario
              form={form}
              nameLabel="AP.PATERNO:"
              parametros="apellido_paterno"
              disabled={disabled}
              //dato={apellido_paterno}
            />
            <Formulario
              form={form}
              nameLabel="AP.MATERNO:"
              parametros="apellido_materno"
              disabled={disabled}
              //dato={apellido_materno}
            />
          </div>
          <div className="usario-datos_nombres">
            <Formulario
              form={form}
              nameLabel="DNI:"
              parametros="dni"
              disabled={disabled}
              //dato={dni}
            />
            <Formulario
              form={form}
              nameLabel="TELEFONO:"
              parametros="telefono"
              //dato={telefono}
            />
            <Formulario
              form={form}
              nameLabel="DIRECCIÓN:"
              parametros="direccion"
              //dato={direccion}
            />
          </div>
          <div className="usario-datos_nombres">
            <FormField
              control={form.control}
              name=""
              render={({ field }) => (
                //Dirección
                <FormItem>
                  <FormLabel>SEXO:</FormLabel>
                  <FormControl>
                    <div className="radio-label">
                      <RadioGroupForm
                        form={form}
                        dato={sexo}
                        disabled={disabled}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="usario-datos_nombres-edad">
              <Calendario
                form={form}
                nameLabel="F.DE NACIMIENTO:"
                dato={fecha_nacimiento}
                disabled={disabled}
              />
              <Formulario
                form={form}
                nameLabel="EDAD:"
                parametros="edad"
                disabled={disabled}
                //dato={edad}
              />
            </div>
            <Formulario
              form={form}
              nameLabel="CORREO:"
              parametros="correo"
              //dato={correo}
            />
          </div>
        </div>
        <div className="usario-datos_perfil">
          <h2>DATOS DEL PERFIL: </h2>
          <div className="usario-datos_nombres">
            <Formulario
              form={form}
              nameLabel="USUARIO:"
              parametros="usuario"
              disabled={disabled}
              //dato={usuario}
            />
            <Formulario
              form={form}
              nameLabel="CONTRASEÑA:"
              parametros="contraseña"
              type="password"
              disabled={disabled}
              //dato={contraseña}
            />
            <TipoUsarioSelect
              form={form}
              dato={tipo_usuario}
              disabled={disabled}
            />
          </div>
        </div>
        <div className="botones">
          {mostrarBoton && ( // Renderiza el botón solo si mostrarBoton es true
            <div className="cambiar-contraseña">
              <Link to="/login/update/">
                <Button
                  className={buttonVariants({
                    variant: "default",
                    className: "rounded-sm bg-blue-claro mr-5",
                  })}
                  type="button"
                >
                  CAMBIAR CONTRASEÑA
                </Button>
              </Link>
            </div>
          )}
          <Button
            className={buttonVariants({
              variant: "default",
              className: "rounded-sm bg-green-boton w-100  ",
            })}
            type="submit"
          >
            <PlusOutlined />
            {textButton}
          </Button>
        </div>
      </form>
    </Form>
  );
}
