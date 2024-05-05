import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./PagosGeneral.scss";
import MenuLateral from "@/components/MenuLateral";
import FormPagos from "./components/FormPagos";
import { getAxios } from "@/functions/methods";
import AuthContext from "@/contexts/AuthContext";
import { Spin } from "antd";
import Escudo from "../../../../assets/img/escudoCiencias.png";

export default function PagosGeneral() {
  let { authTokens } = useContext(AuthContext);
  const param = useParams();
  const [general, setGeneral] = useState([]);
  const [loading, setLoading] = useState([]);
  const { id, pagos } = param;
  const URLALUMNOS = `http://127.0.0.1:8000/datos_alumno/api/estudiantes_activos/${id}/`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };
  useEffect(() => {
    if (id != undefined) {
      setLoading(true); // Indicar que la solicitud está en curso
      getAxios(URLALUMNOS, headers, setGeneral, setLoading);
    }
  }, [id]);
  if (!loading) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <img src={Escudo} />
        <Spin />
      </div>
    );
  }

  return (
    <div className="flex overflow-hidden h-screen blue-oscuro">
      <MenuLateral>
        <FormPagos general={general} />
      </MenuLateral>
    </div>
  );
}
