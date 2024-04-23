import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link, Navigate, useNavigate } from "react-router-dom"; //Agrego
import { postAxios } from "@/functions/methods";

// Personal imports
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";---Quite
import InputCredenciales from "./InputCredenciales";
// Personal imports
import { Form } from "@/components/ui/form";
import { Button, buttonVariants } from "@/components/ui/button";
import { useParams } from "react-router-dom";
// CONFIGURACION INICIO

// ACÁ SE HACEN LAS VALIDACIONES PRIMARIAS

const formSchema = z.object({
  username: z.string().min(8, {
    message: "El usuario debe tener un minimo de 8 caracteres.",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener un minimo de 8 caracteres.",
  }),
  repeat_new_password: z.string().min(8, {
    message: "La contraseña debe ser igual que a la anterior",
  }),
  uuid: z.string()
});
// .refine((data) => data.password === data.repeat_new_password, {
//   message: "Las contraseñas no coinciden",
// });

//CONFIGURACION CIERRE
const FormActualizarContrasenia = () => {
  const navigate = useNavigate(); // Agrego
  // NO TOCAR INICIO
  // CONTENIDO DE LA LIBRERIA SHADCN
  const params = useParams()

  console.log(params)
  let uuid = params.uuid;
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      uuid: uuid,
      repeat_new_password: "",
    },
  });
  const url = "http://localhost:8000/api/reset-password";
  function onSubmit(values) {
    const { username, password, repeat_new_password, uuid } = values;
    if (password == repeat_new_password) {
      console.log({ username: username, password: password, uuid: uuid });
      navigate("/login"); //Agrego

      postAxios(url, values);
    } else {
      console.log("hola");
      alert("Las contraseñas no coinciden");
    }
  }
  //NO TOCAR CIERRE

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* INPUTS */}

        {/* ES EN DONDE SE INGRESA USUARIO Y CONTRASEÑA */}
        {/* 
        control: CONTROL DEL FORMULARIO (EN TODOS LOS INPUTS IRÁ form.control)
        name: ESTE ES EL NOMBRE CON EL QUE SE ENVIARÁ EL PARAMETRO POR CONSOLA
        labelText: LO QUE IRÁ EN EL ENCABEZADO DEL INPUT
        type: ES EL TIPO DE INPUT
        placeholder: ES ESE TEXTO QUE TE SALE DENTRO DEL INPUT
        icon: EL ICONO DENTRO DEL INPUT
        */}

        <div className="flex flex-col gap-6">
          <InputCredenciales
            control={form.control}
            name="username"
            type="text"
            placeholder="Usuario"
            icon={faUser}
          />

          <InputCredenciales
            control={form.control}
            name="password"
            type="password"
            placeholder="Contraseña"
            icon={faLock}
          />

          <InputCredenciales
            control={form.control}
            name="repeat_new_password"
            type="password"
            placeholder="Confirmar contraseña"
            icon={faLock}
          />
        </div>

        {/* BOTON */}

        {/* LOS PARAMETROS QUE LE PASO ESTÁN BASADOS EN LOS PARAMETROS DE TAILWIND */}

        <div className="flex justify-center">
          {/* <Link className="w-full" to="/login"> */}
          <Button
            className={buttonVariants({
              variant: "default",
              className:
                "w-full h-11 mt-4 text-base bg-red-boton hover:bg-red-boton-hover rounded-none",
            })}
            type="submit"
          >
            RESTABLECER CONTRASEÑA
          </Button>
          {/* </Link> */}
        </div>
      </form>
    </Form>
  );
};

export default FormActualizarContrasenia;
