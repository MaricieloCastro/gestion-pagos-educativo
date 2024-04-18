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
  repeat_new_password: z.string().min(8, {
    message: "La contraseña debe ser igual que a la anterior",
  }),
});
//CONFIGURACION CIERRE

const FormActualizarContrasenia = () => {
  // NO TOCAR INICIO
  // CONTENIDO DE LA LIBRERIA SHADCN
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      repeat_new_password: "",
    },
  });

  function onSubmit(values) {
    const {username, password, repeat_new_password}=values;
    if(password==repeat_new_password){
      console.log({"username": username, "password": password})
    }else{ 
      alert("Las contraseñas no coinciden")
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

        <InputCredenciales
          control={form.control}
          name="username"
          type="text"
          placeholder="Usuario"
          icon={faUser}
          classNameInput="pr-10 text-base mb-4"
        />

        <InputCredenciales
          control={form.control}
          name="password"
          type="password"
          placeholder="Contraseña"
          icon={faLock}
          classNameInput="pr-10 text-base mb-4"
        />
        
        <InputCredenciales
          control={form.control}
          name="repeat_new_password"
          type="password"
          placeholder="Confirmar contraseña"
          icon={faLock}
          classNameInput="pr-10 text-base"
        />

        {/* BOTON DE OLVIDASTE TU CONTRASEÑA */}

        {/* ESTE BOTON TE ENVIARÁ A LA PANTALLA DE REESTABLECER CUANDO LO CONFIGUREMOS */}

        {/* BOTON */}

        {/* LOS PARAMETROS QUE LE PASO ESTÁN BASADOS EN LOS PARAMETROS DE TAILWIND */}

        <div className="flex justify-center">
          <Button
            className={buttonVariants({
              variant: "default",
              className:
                "w-full h-11 mt-4 text-xs bg-red-boton hover:bg-red-boton-hover rounded-none",
            })}
            type="submit"
          >
            RESTABLECER CONTRASEÑA
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormActualizarContrasenia;