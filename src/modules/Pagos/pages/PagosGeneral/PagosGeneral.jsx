import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./PagosGeneral.scss";
import MenuLateral from "@/components/MenuLateral";
import axios from "axios";
import FormPagos from "./components/FormPagos";
import { getAxios } from "@/functions/methods";
import AuthContext from "@/contexts/AuthContext";
import { Spin } from "antd";
import Escudo from "../../../../assets/img/escudoCiencias.png";
import { TIPOPAGOURL } from "@/modules/Seguridad/pages/CrearUsuario/compenetes/reuse/ConstObj";

export default function PagosGeneral() {
  let { authTokens } = useContext(AuthContext);
  const param = useParams();
  const [general, setGeneral] = useState([]);
  const [loading, setLoading] = useState([]);
  const [tipo_pago, setTipoPago] = useState([]);
  const { id, pagos } = param;
  const URLALUMNOS = `http://127.0.0.1:8000/datos_alumno/api/estudiantes_activos/${id}/`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const alumnos = await axios.get(URLALUMNOS, headers);
        const TipoPago = await axios.get(TIPOPAGOURL, headers);
        setGeneral(alumnos.data);
        setTipoPago(TipoPago.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);
  if (loading) {
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
        <FormPagos general={general} tipo_pago={tipo_pago} />
      </MenuLateral>
    </div>
  );
}
