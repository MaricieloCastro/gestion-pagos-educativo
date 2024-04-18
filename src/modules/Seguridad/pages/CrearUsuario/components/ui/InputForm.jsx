import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Formulario from "./formulario";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import "./formUsario.scss";

import { PlusOutlined } from "@ant-design/icons";

//Para la imagen
import InputFile from "./importImage";
import ImageProfile from "./ImageProfile";
import SinPerfil from "../../../../../../assets/img/sin-perfil-350x400.jpg";
//Radio
import { RadioGroupForm } from "./RadioGroupForm";
//Componenete tipo de usuario
import { TipoUsarioSelect } from "./TipoUsarioSelect";
import CheckboxLabels from "./CheckboxLabels";
//Calendario
import Calendario from "../../compenetes/reuse/Calendario";

import { Usuarios } from "../../compenetes/reuse/ConstObj";

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
  const { disabled, ButtonView, textButton } = props;

  const [useUsuario, setUsuario] = useState([]);
  useEffect(() => {
    const allUsuario = Usuarios;
    const allDateUser = JSON.stringify(allUsuario);
    setUsuario(allDateUser);
  }, []);
  console.log(useUsuario);

  const { nombre, apellido_materno, apellido_paterno, dni } = Usuarios[0];
  console.log(nombre);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      dni: "",
      telefono: "",
      direccion: "",
      edad: "",
      correo: "",
      sexo: "",
      usuario: "",
      contraseña: "",
      tipo_usuario: "",
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
        <img src={SinPerfil} />
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
              name="sexo"
              render={({ field }) => (
                //Dirección
                <FormItem>
                  <FormLabel>SEXO:</FormLabel>
                  <FormControl>
                    <div className="radio-label">
                      <RadioGroupForm
                        form={form}
                        //dato={sexo}
                        disabled={disabled}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="usario-datos_nombres-edad">
              <FormField
                control={form.control}
                name="Nacimiento"
                render={({ field }) => (
                  //Dirección
                  <FormItem>
                    <FormLabel>F.NACIMIENTO:</FormLabel>
                    <FormControl>
                      {/* <Input placeholder="" {...field} /> */}
                      <Calendario />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
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
              //dato={tipo_usuario}
              disabled={disabled}
            />
          </div>
        </div>
        <div className="botones">
          {mostrarBoton && ( // Renderiza el botón solo si mostrarBoton es true
            <div className="cambiar-contraseña">
              <Button
                className={buttonVariants({
                  variant: "default",
                  className: "rounded-sm bg-blue-claro mr-5",
                })}
              >
                CAMBIAR CONTRASEÑA
              </Button>
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
