import React, { useState, useEffect, useContext } from "react";
import MenuLateral from "@/components/MenuLateral";
import { Button, ConfigProvider, message, Steps } from "antd";
import "./InscribirAlumno.scss";
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
import {
  DEFAULT_VALUES_DATOS_MADRE,
  FORM_SCHEMA_DATOS_MADRE,
} from "./Forms/constants/DatosMadreConstans";
import {
  DEFAULT_VALUES_DATOS_FAMILIAR_EXTRA,
  FORM_SCHEMA_DATOS_FAMILIAR_EXTRA,
} from "./Forms/constants/DatosFamiliarExtraConstans";
import DatosEstudiante from "./Forms/DatosEstudiante";
import DatosPadre from "./Forms/DatosPadre";
import DatosMadre from "./Forms/DatosMadre";
import DatosFamiliarExtra from "./Forms/DatosFamiliarExtra";
import axios from "axios";
import ApoderadoContext from "@/contexts/FomularioContext";
import { useParams } from "react-router-dom";

const EditarAlumno = () => {
  const {
    apoderadoPadre,
    setApoderadoPadre,
    apoderadoMadre,
    setApoderadoMadre,
  } = useContext(ApoderadoContext);
  const { id } = useParams();
  const [current, setCurrent] = useState(0);
  const [formDataEstudiante, setFormDataEstudiante] = useState(
    DEFAULT_VALUES_DATOS_ESTUDIANTE
  );
  const [formDataPadre, setFormDataPadre] = useState(
    DEFAULT_VALUES_DATOS_PADRE
  );
  const [formDataMadre, setFormDataMadre] = useState(
    DEFAULT_VALUES_DATOS_MADRE
  );
  const [formDataFamiliarExtra, setFormDataFamiliarExtra] = useState(
    DEFAULT_VALUES_DATOS_FAMILIAR_EXTRA
  );

  const getDefaultValues = (step) => {
    switch (step) {
      case 0:
        return formDataEstudiante;
      case 1:
        return formDataPadre;
      case 2:
        return formDataMadre;
      case 3:
        return formDataFamiliarExtra;
      default:
        return {};
    }
  };

  const formSchema = z.object(
    current === 0
      ? FORM_SCHEMA_DATOS_ESTUDIANTE
      : current === 1
      ? FORM_SCHEMA_DATOS_PADRE
      : current === 2
      ? FORM_SCHEMA_DATOS_MADRE
      : FORM_SCHEMA_DATOS_FAMILIAR_EXTRA
  );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValues(current),
  });

  let paginado = [
    {
      title: "Datos del estudiante",
      content: <DatosEstudiante control={form.control} />,
    },
    {
      title: "Datos del padre",
      content: <DatosPadre control={form.control} />,
    },
    {
      title: "Datos de la madre",
      content: <DatosMadre control={form.control} />,
    },
  ];

  if (!apoderadoPadre && !apoderadoMadre) {
    paginado = [
      ...paginado.slice(0, 3),
      {
        title: "Datos del familiar extra",
        content: <DatosFamiliarExtra control={form.control} />,
      },
      ...paginado.slice(3),
    ];
  }

  paginado.push({
    title: "Finalizar",
    content: "¿Está seguro de enviar el formulario?",
  });

  useEffect(() => {
    form.reset(getDefaultValues(current));
  }, [
    current,
    formDataEstudiante,
    formDataPadre,
    formDataMadre,
    formDataFamiliarExtra,
  ]);

  useEffect(() => {
    const fetchAlumnoFamiliarData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/datos_alumno/api/alumno_x_familiar/?id_alumno=${id}`
        );
        const data = response.data;

        let foundPadre = false;
        let foundMadre = false;
        let foundExtra = false;

        data.forEach((item) => {
          if (item.alumno) {
            setFormDataEstudiante({
              ...item.alumno,
              codigo: item.alumno.dni,
              id_beneficio: item.alumno.beneficio.id,
            });
            console.log("Datos del alumno", item.alumno);
          }
          if (item.familiar) {
            if (item.familiar.parentesco === "PADRE") {
              setFormDataPadre(item.familiar);
              setApoderadoPadre(true);
              foundPadre = true;
              console.log("Datos del Padre", item.familiar);
            } else if (item.familiar.parentesco === "MADRE") {
              setFormDataMadre(item.familiar);
              setApoderadoMadre(true);
              foundMadre = true;
              console.log("Datos de la Madre", item.familiar);
            } else {
              setFormDataFamiliarExtra(item.familiar);
              foundExtra = true;
              console.log("Datos del Familia Extra", item.familiar);
            }
          }
        });

        if (!foundPadre) {
          setFormDataPadre(DEFAULT_VALUES_DATOS_PADRE);
        }

        if (!foundMadre) {
          setFormDataMadre(DEFAULT_VALUES_DATOS_MADRE);
        }

        if (!foundExtra) {
          setFormDataFamiliarExtra(DEFAULT_VALUES_DATOS_FAMILIAR_EXTRA);
        }
      } catch (error) {
        console.error("Error fetching alumno_x_familiar data:", error);
      }
    };

    if (id) {
      fetchAlumnoFamiliarData();
    }
  }, [id]);

  const steps = paginado;

  const next = async (values) => {
    try {
      switch (current) {
        case 0:
          setFormDataEstudiante({ ...formDataEstudiante, ...values });
          break;
        case 1:
          setFormDataPadre({ ...formDataPadre, ...values });
          setApoderadoPadre(values.apoderado);
          break;
        case 2:
          setFormDataMadre({ ...formDataMadre, ...values });
          setApoderadoMadre(values.apoderado);
          break;
        case 3:
          setFormDataFamiliarExtra({ ...formDataFamiliarExtra, ...values });
          break;
        default:
          break;
      }
      setCurrent(current + 1);
    } catch (error) {
      console.error("Error en el siguiente paso:", error);
      message.error("Ocurrió un error al avanzar al siguiente paso.");
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onSubmit = async () => {
    try {
      const estudianteData = formDataEstudiante;
      const padreData = formDataPadre;
      const madreData = formDataMadre;
      const familiarExtraData = formDataFamiliarExtra;

      const promises = [
        axios.put(
          `http://localhost:8000/datos_alumno/api/alumno/${id}/`,
          estudianteData
        ),
        axios.put(
          `http://localhost:8000/datos_alumno/api/familiar/${padreData.id}/`,
          padreData
        ),
        axios.put(
          `http://localhost:8000/datos_alumno/api/familiar/${madreData.id}/`,
          madreData
        ),
      ];

      if (!apoderadoPadre && !apoderadoMadre) {
        promises.push(
          axios.put(
            `http://localhost:8000/datos_alumno/api/familiar/${familiarExtraData.id}/`,
            familiarExtraData
          )
        );
      }

      const responses = await axios.all(promises);
      console.log("enviado correctamente", responses);
      message.success("Formulario enviado exitosamente!");
    } catch (error) {
      message.error(error.message);
      console.error("Error al enviar formulario:", error);
    }
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    textAlign: "center",
    color: "#F9F9F9",
    backgroundColor: "#D9D9D9",
    border: "0.5px solid #C9C9C9",
    marginTop: 16,
  };

  return (
    <MenuLateral>
      <form
        className="inscribir-alumno h-full"
        onSubmit={form.handleSubmit(
          current < steps.length - 1 ? next : onSubmit
        )}
      >
        <ConfigProvider>
          <Steps
            size="small"
            current={current}
            items={items}
            responsive={false}
          />
        </ConfigProvider>
        <div style={contentStyle}>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {current > 0 && (
            <Button onClick={prev} style={{ marginRight: 8 }}>
              Anterior
            </Button>
          )}
          <Button type="primary" htmlType="submit">
            {current < steps.length - 1 ? "Siguiente" : "Enviar"}
          </Button>
        </div>
      </form>
    </MenuLateral>
  );
};

export default EditarAlumno;
