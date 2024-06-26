import React, { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Personal imports
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import InputCredenciales from "./InputCredenciales";
import { enlaces } from "@/utils/rutas";
// Personal imports

import { Form } from "@/components/ui/form";
import { Button, buttonVariants } from "@/components/ui/button";
import AuthContext from "@/contexts/AuthContext";
import { ToastContainer } from "react-toastify";

// CONFIGURACION INICIO
// ACÁ SE HACEN LAS VALIDACIONES PRIMARIAS
const formSchema = z.object({
  username: z.string().min(8, {
    message: "El usuario debe tener un minimo de 8 caracteres.",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener un minimo de 8 caracteres.",
  }),
});
//CONFIGURACION CIERRE

const FormIniciarSesion = () => {
  let { loginUser } = useContext(AuthContext);
  // NO TOCAR INICIO
  // CONTENIDO DE LA LIBRERIA SHADCN
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(loginUser)} className="space-y-4">
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

        <InputCredenciales
          control={form.control}
          name="username"
          labelText="Usuario"
          type="text"
          placeholder="Ingrese su usuario"
          icon={faUser}
          classNameFormItem="pt-8"
        />

        <InputCredenciales
          control={form.control}
          name="password"
          labelText="Contraseña"
          type="password"
          placeholder="Ingrese su contraseña"
          icon={faLock}
        />

        {/* BOTON DE OLVIDASTE TU CONTRASEÑA */}

        {/* ESTE BOTON TE ENVIARÁ A LA PANTALLA DE REESTABLECER CUANDO LO CONFIGUREMOS */}

        <div>
          <Link
            className="text-base text-white text-opacity-40"
            to={enlaces[1].path}
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        {/* BOTON */}

        {/* LOS PARAMETROS QUE LE PASO ESTÁN BASADOS EN LOS PARAMETROS DE TAILWIND */}

        <div className="flex justify-center">
          <Button
            className={buttonVariants({
              variant: "default",
              className:
                "w-32 h-11 mt-4 text-xs bg-red-boton hover:bg-red-boton-hover rounded-none",
            })}
            type="submit"
          >
            INICIAR SESION
          </Button>
        </div>
      </form>
      <ToastContainer position="bottom-left" limit={1} stacked closeOnClick theme="colored" />
    </Form>
  );
};

export default FormIniciarSesion;
