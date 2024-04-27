import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Personal imports
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import InputCredenciales from "./InputCredenciales";
// Personal imports

import { Form } from "@/components/ui/form";
import { Button, buttonVariants } from "@/components/ui/button";
import { postAxios } from "@/functions/methods";
import { ToastContainer } from "react-toastify";

// CONFIGURACION INICIO
// ACÁ SE HACEN LAS VALIDACIONES PRIMARIAS
const formSchema = z.object({
  email: z.string().email({
    message: "Por favor ingrese una dirección de correo electrónico válida.",
  }),
});
//CONFIGURACION CIERRE

const FormRestablecerContrasenia = () => {
  // NO TOCAR INICIO
  // CONTENIDO DE LA LIBRERIA SHADCN
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const headers = ""

  const [reload, setReload] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const url = "http://127.0.0.1:8000/api/send-reset-password";

  const navigateTo = () => {
    navigate("/login/")
  }

  function onSubmit(values) {
    postAxios(url, values, headers, setReload, reload, setError, true, () => { });
  }

  //NO TOCAR CIERRE

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="pt-7">
          <h1 className="text-white font-medium flex justify-center text-lg">
            RESTABLECER CONTRASEÑA
          </h1>

          <br />
          <h2 className="text-white pt-5px" style={{ textAlign: "justify" }}>
            Introduzca su dirección de correo electronico registrado abajo para
            recibir el enlace de restablrecimiento de contraseña
          </h2>
        </div>

        <InputCredenciales
          control={form.control}
          name="email"
          labelText="CORREO"
          type="mail"
          placeholder="Example@gmail.com"
          icon={faEnvelope}
          classNameFormItem="pt-8"
        />

        <div className="flex justify-center">
          <Button
            className={buttonVariants({
              variant: "default",
              className:
                "w-full h-11 mt-2 text-xs bg-red-boton hover:bg-red-boton-hover rounded-none",
            })}
            type="submit"
          >
            <p className="text-lg">ENVIAR</p>
          </Button>
        </div>

        <div className="Regresar">
          <Link
            to="/login"
            className="text-sm text-white text-opacity-40 hover:underline "
          >
            Regresar para Iniciar Sesión
          </Link>
        </div>
      </form>
      <ToastContainer position="bottom-left" limit={1} stacked closeOnClick theme="colored" />
    </Form>
  );
};

export default FormRestablecerContrasenia;
