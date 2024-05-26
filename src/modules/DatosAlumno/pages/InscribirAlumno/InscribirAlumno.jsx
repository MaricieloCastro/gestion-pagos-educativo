import React, { useState } from "react";
import MenuLateral from "@/components/MenuLateral";
import { Button, message, Steps, theme } from "antd";

import "./InscribirAlumno.css";
import DatosPersonales from "./Forms/DatosPersonales";
import { z } from "zod";
import {
  DEFAULT_VALUES_DATOS_PERSONALES,
  FORM_SCHEMA_DATOS_PERSONALES,
} from "./Forms/constants/DatosPersonalesConstants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  DEFAULT_VALUES_USER_DATA,
  FORM_SCHEMA_USER_DATA,
} from "./Forms/constants/UserDataConstants";
import UserData from "./Forms/UserData";

const InscribirAlumno = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [personalData, setPersonalData] = useState(null);
  const [userData, setUserData] = useState(null);

  const formSchema = z.object(
    current === 0 ? FORM_SCHEMA_DATOS_PERSONALES : FORM_SCHEMA_USER_DATA
  );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:
      current === 0
        ? DEFAULT_VALUES_DATOS_PERSONALES
        : DEFAULT_VALUES_USER_DATA,
  });

  const steps = [
    {
      title: "Datos personales",
      content: <DatosPersonales control={form.control} />,
    },
    {
      title: "Datos de usuario",
      content: <UserData control={form.control} />,
    },
    {
      title: "Finalizar",
      content: "¿Está seguro de enviar el formulario?",
    },
  ];

  console.log("current", steps.length);

  const onSubmit = (values) => {
    if (current === 0) {
      console.log(values);
      setPersonalData(values);
      setCurrent(current + 1);
    }

    if (current === 1) {
      console.log(values);
      setUserData(values);
      setCurrent(current + 1);
    }

    if (current === steps.length - 1) {
      console.log("datos personales:", personalData),
        console.log("datos de usuario:", userData);
    }
  };

  console.log(personalData);
  console.log(userData);

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    border: `1px solid ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <MenuLateral>
      <div>
        {" "}
        <form
          className="crear-usuario h-full gap-2 min-w-[0px]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="crear-usuario__tittle flex justify-center items-center py-3 border-b-[1px] mx-10">
            <h1 className="text-2xl font-semibold text-blue-500">
              CREAR USUARIO
            </h1>
          </div>
          <div className="crear-usuario__content px-10">
            <Steps size="small" current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div className="flex justify-end py-3">
              {current > 0 && (
                <Button
                  style={{
                    margin: "0 8px",
                  }}
                  onClick={() => prev()}
                >
                  Atrás
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button htmlType="submit" type="primary">
                  Siguiente
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button htmlType="submit" type="primary">
                  Crear
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </MenuLateral>
  );
};

export default InscribirAlumno;
