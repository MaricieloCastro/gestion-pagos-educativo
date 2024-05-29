import React, { useState } from "react";
import MenuLateral from "@/components/MenuLateral";
import { Button, message, Steps, theme } from "antd";
import "./InscribirAlumno.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  DEFAULT_VALUES_DATOS_ESTUDIANTE,
  FORM_SCHEMA_DATOS_ESTUDIANTE,
} from "./Forms/constants/DatosEstudianteConstans";
import {
  DEFAULT_VALUES_DATOS_PADRE,
  FORM_SCHEMA_DATOS_PADRE,
} from "./Forms/constants/DatosPadreConstans";
import DatosPadre from "./Forms/DatosPadre";
import DatosEstudiante from "./Forms/DatosEstudiante";
import FormController from "./components/FormController";
import DepartamentosSelect from "./components/DepartamentosSelect";

const InscribirAlumno = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [estudianteData, setEstudianteData] = useState(null);
  const [padreData, setPadreData] = useState(null);

  const formSchema = z.object(
    current === 0 ? FORM_SCHEMA_DATOS_ESTUDIANTE : FORM_SCHEMA_DATOS_PADRE
  );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:
      current === 0
        ? DEFAULT_VALUES_DATOS_ESTUDIANTE
        : DEFAULT_VALUES_DATOS_PADRE,
  });

  const steps = [
    {
      title: "Datos del estudiante",
      // content: <DatosPersonales control={form.control} />,
      content: <DatosEstudiante control={form.control} />,
    },
    {
      title: "Datos del padre",
      content: <DatosPadre control={form.control} />,
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
      setEstudianteData(values);
      setCurrent(current + 1);
    }

    if (current === 1) {
      console.log(values);
      setPadreData(values);
      setCurrent(current + 1);
    }

    if (current === steps.length - 1) {
      console.log("datos del estudiante:", estudianteData),
        console.log("datos del padre:", padreData);
    }
  };

  console.log(estudianteData);
  console.log(padreData);

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    border: `1px solid ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <MenuLateral>
      <form
        className="inscribir-alumno h-full min-w-[0px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
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
      </form>
    </MenuLateral>
  );
};

export default InscribirAlumno;
