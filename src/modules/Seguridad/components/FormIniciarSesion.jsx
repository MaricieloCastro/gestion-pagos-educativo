import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Personal imports
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import InputCredenciales from "./InputCredenciales";
// Personal imports

import { Form } from "@/components/ui/form";
import { Button, buttonVariants } from "@/components/ui/button";

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
  // NO TOCAR INICIO
  // CONTENIDO DE LA LIBRERIA SHADCN
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
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

        <InputCredenciales
          control={form.control}
          name="username"
          labelText="Usuario"
          type="text"
          placeholder="Ingrese su usuario"
          icon={faUser}
        />

        <InputCredenciales
          control={form.control}
          name="password"
          labelText="Contrseña"
          type="password"
          placeholder="Ingrese su contraseña"
          icon={faLock}
        />

        {/* BOTON DE OLVIDASTE TU CONTRASEÑA */}

        {/* ESTE BOTON TE ENVIARÁ A LA PANTALLA DE REESTABLECER CUANDO LO CONFIGUREMOS */}

        <div>
          <Link className="text-base text-white text-opacity-40" to="#">
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
                "w-32 h-11 mt-4 text-xs bg-red-boton hover:bg-red-boton-hover",
            })}
            type="submit"
          >
            INICIAR SESION
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormIniciarSesion;
