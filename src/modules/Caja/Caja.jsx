import React from "react";
import { useState, useContext, useEffect } from "react";
import "./caja.scss";
import MenuLateral from "@/components/MenuLateral";
import CajaChica from "./components/CajaChica";
import { AperturaAPI } from "@/api/ApiRutas";
import { getAxios } from "@/functions/methods";
import AuthContext from "@/contexts/AuthContext";
import { Spin } from "antd";
export default function Caja() {
  const [general, setGeneral] = useState();
  const [loading, setLoading] = useState();
  let { authTokens } = useContext(AuthContext);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };
  useEffect(() => {
    getAxios(AperturaAPI, headers, setGeneral, setLoading);
  }, []);
  if (!loading) {
    return <Spin />;
  }
  return (
    <MenuLateral>
      <CajaChica cajaDatos={general} />
    </MenuLateral>
  );
}
