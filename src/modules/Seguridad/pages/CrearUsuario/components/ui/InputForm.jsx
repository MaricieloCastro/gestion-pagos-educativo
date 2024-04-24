import { useState, useEffect, useContext } from "react";
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
import { postAxios } from "@/functions/methods";
import AuthContext from "@/contexts/AuthContext";

//Modals
import ModaForm from "../../compenetes/Modal/ModalForm";
// Lógica del componente
const FormSchema = z.object({
  //Contra cuátos caracteres hay en el input
  nombres: z.string().min(1, {
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
  celular: z.string().min(9, {
    message: "Campo Obligatorio",
  }),
  domicilio: z.string().min(10, {
    message: "Campo Obligatorio",
  }),
  edad: z.string().min(2, {
    message: "Campo Obligatorio",
  }),
  email: z.string().min(10, {
    message: "Campo Obligatorio",
  }),
  sexo: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  username: z.string().min(8, {
    message: "Campo Obligatorio",
  }),
  password: z.string().min(8, {
    message: "Campo Obligatorio",
  }),
  id_tipo_usuario: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  fecha_nacimiento: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  apellido_paterno: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  apellido_materno: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
});
import { putAxios } from "@/functions/methods";
import { Mail, User } from "lucide-react";
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
  let { authTokens } = useContext(AuthContext);
  const [reload, setReload] = useState(true);
  const [usuario, setUsuarios] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };

  const { disabled, ButtonView, textButton, usuarios, load } = props;
  const {
    id,
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
    uuid,
  } = usuarios || {};
  //console.log(tipo_usuario.nombre);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombres: nombres || "",
      apellido_paterno: apellido_paterno || "",
      apellido_materno: apellido_materno || "",
      dni: dni || "",
      celular: celular || "",
      domicilio: domicilio || "",
      edad: "20" || "",
      email: email || "",
      sexo: sexo || "",
      username: username || "",
      password: password || "",
      id_tipo_usuario: tipo_usuario.nombre,
      fecha_nacimiento: fecha_nacimiento || "",
    },
  });
  const url = "http://127.0.0.1:8000/api/usuario/";
  const urlUp = `/login/update/${uuid}`;
  const [open, setOpen] = useState(false);
  function Methods(values) {
    const data = values;
    console.log(values.id_tipo_usuario);
    if (data.id_tipo_usuario == "SECRETARIA") {
      data.id_tipo_usuario = "2";
    } else {
      data.id_tipo_usuario = "1";
    }
    if (load == true) {
      postAxios(url, data, headers, setReload, reload, setError);
    }
    const Nurl = `http://127.0.0.1:8000/api/usuario/${id}/`;
    putAxios(Nurl, data, headers, setReload, reload, setError);
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
          <h2>Adjuntar Fotografia</h2>

          {/* <InputFile /> */}
          <Button
            className={buttonVariants({
              variant: "default",
              className: "rounded-none",
            })}
          >
            <PlusOutlined />
          </Button>
        </div>
      </div>
      <form onSubmit={form.handleSubmit(Methods)}>
        {/* Este es la sección del contenedor */}
        <div className="usario-datos">
          <h2>DATOS PERSONALES: </h2>
          <div className="usario-datos_nombres">
            {/* Inp Nombres */}
            <Formulario
              form={form}
              nameLabel="Nombres:"
              parametros="nombres"
              disabled={disabled}
              dato={nombres}
            />
            <Formulario
              form={form}
              nameLabel="Apellido Paterno:"
              parametros="apellido_paterno"
              disabled={disabled}
              dato={apellido_paterno}
            />
            <Formulario
              form={form}
              nameLabel="Apellido Materno:"
              parametros="apellido_materno"
              disabled={disabled}
              dato={apellido_materno}
            />
          </div>
          <div className="usario-datos_nombres">
            <Formulario
              form={form}
              nameLabel="DNI:"
              parametros="dni"
              disabled={disabled}
              dato={dni}
            />
            <Formulario
              form={form}
              nameLabel="Telefono:"
              parametros="celular"
              dato={celular}
            />
            <Formulario
              form={form}
              nameLabel="Dirección:"
              parametros="domicilio"
              dato={domicilio}
            />
          </div>
          <div className="usario-datos_nombres">
            <FormField
              control={form.control}
              name=""
              render={({ field }) => (
                //Dirección
                <FormItem>
                  <FormLabel>Sexo:</FormLabel>
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
                nameLabel="F.de Nacimiento:"
                dato={fecha_nacimiento}
                disabled={disabled}
              />
              <Formulario
                form={form}
                nameLabel="Edad:"
                parametros="edad"
                disabled={disabled}
                dato={20}
              />
            </div>
            <Formulario
              form={form}
              nameLabel="Correo:"
              parametros="email"
              dato={email}
            />
          </div>
        </div>
        <div className="usario-datos_perfil">
          <h2>DATOS DEL PERFIL: </h2>
          <div className="usario-datos_nombres">
            <Formulario
              form={form}
              nameLabel="Usuario:"
              parametros="username"
              disabled={disabled}
              dato={username}
            />
            <Formulario
              form={form}
              nameLabel="Contraseña:"
              parametros="password"
              type="password"
              disabled={disabled}
              dato={password}
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
              <Link to={urlUp}>
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
          <ModaForm open={open} setOpen={setOpen} />
        </div>
      </form>
    </Form>
  );
}
