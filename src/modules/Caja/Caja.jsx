import React from "react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import "./caja.scss";
import MenuLateral from "@/components/MenuLateral";
import CajaChica from "./components/CajaChica";
import { AperturaAPI, AperturaMovimientoAPI } from "@/api/ApiRutas";
import { getAxios } from "@/functions/methods";
import AuthContext from "@/contexts/AuthContext";
import Escudo from "../../assets/img/escudoCiencias.png";
import { Spin } from "antd";
export default function Caja() {
  const [general, setGeneral] = useState([]);
  const [aperturaMovimiento, setAperturaMovimiento] = useState([]);
  const [CajaActiva, setCajaActiva] = useState([]);
  const [loading, setLoading] = useState();
  let { authTokens } = useContext(AuthContext);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const apertura = await axios.get(AperturaAPI, headers);

        const AperturaMovimiento = await axios.get(
          AperturaMovimientoAPI,
          headers
        );
        const idA = AperturaMovimiento.data[0].id_apertura;
        console.log(idA);
        const CajaActiva = await axios.get(
          `http://127.0.0.1:8000/caja/api/apertura-movimiento/?id_apertura=${idA}`,
          headers
        );
        setGeneral(apertura.data);
        setAperturaMovimiento(AperturaMovimiento.data);
        setCajaActiva(CajaActiva.data);
        setLoading(true);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);
  if (!loading) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <img src={Escudo} />
        <Spin />
      </div>
    );
  }
  return (
    <MenuLateral>
      <CajaChica
        cajaDatos={general}
        movimiento={aperturaMovimiento[0]}
        movimientos={CajaActiva}
      />
    </MenuLateral>
  );
}
