import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
  // dni: z.string().min(1, {
  //   message: "Campo Obligatorio",
  // }),
  // telefono: z.string().min(1, {
  //   message: "Campo Obligatorio",
  // }),
  // direccion: z.string().min(1, {
  //   message: "Campo Obligatorio",
  // }),
  // edad: z.string().min(1, {
  //   message: "Campo Obligatorio",
  // }),
  // correo: z.string().min(1, {
  //   message: "Campo Obligatorio",
  // }),
});

//Componenete tipo de usuario
import { TipoUsarioSelect } from "./TipoUsarioSelect";
import CheckboxLabels from "./CheckboxLabels";
//Calendario
import Calendario from "../Calendario";

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

export default function InputForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: "",
      APpaterno: "",
      APmaterno: "",
      dni: "",
      telefono: "",
      direccion: "",
      edad: "",
      correo: "",
    },
  });
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <div className="fotografia">
        <img src={SinPerfil} />
        <div className="imp">
          Fotografia:
          {/* <InputFile /> */}
          <Button>Cargar Foto</Button>
        </div>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Este es la sección del contenedor */}
        <div className="usario-datos">
          <h2>DATOS PERSONALES: </h2>
          <div className="usario-datos_nombres">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                //Nombre
                <FormItem>
                  <FormLabel>NOMBRES: </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="APpaterno"
              render={({ field }) => (
                //Apellido Paterno
                <FormItem>
                  <FormLabel>AP. PATERNO: </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="APmaterno"
              render={({ field }) => (
                //Apellido Paterno
                <FormItem>
                  <FormLabel>AP. MATERNO:</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="usario-datos_nombres">
            <FormField
              control={form.control}
              name="dni"
              render={({ field }) => (
                //DNI
                <FormItem>
                  <FormLabel>DNI:</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                //telefono
                <FormItem>
                  <FormLabel>TELEFONO:</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="direccion"
              render={({ field }) => (
                //Dirección
                <FormItem>
                  <FormLabel>DIRECCIÓN:</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
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
                    <div className="checkbox-label">
                      <CheckboxLabels />
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
              <FormField
                control={form.control}
                name="edad"
                render={({ field }) => (
                  //Dirección
                  <FormItem>
                    <FormLabel>EDAD:</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="correo"
              render={({ field }) => (
                //Dirección
                <FormItem>
                  <FormLabel>CORREO:</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="usario-datos_perfil">
          <h2>DATOS DEL PERFIL: </h2>
          <div className="usario-datos_nombres">
            <FormField
              control={form.control}
              name="Usuario"
              render={({ field }) => (
                //Dirección
                <FormItem>
                  <FormLabel>USUARIO</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Contraseña"
              render={({ field }) => (
                //Dirección
                <FormItem>
                  <FormLabel>CONTRASEÑA:</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tipo_usuario"
              render={({ field }) => (
                //Dirección
                <FormItem>
                  <FormLabel>TIPO DE USUARIO:</FormLabel>
                  <FormControl>
                    {/* <Input placeholder="" {...field} /> */}
                    <TipoUsarioSelect />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="boton">
          <Button type="submit">
            <PlusOutlined />
            CREAR
          </Button>
        </div>
      </form>
    </Form>
  );
}
