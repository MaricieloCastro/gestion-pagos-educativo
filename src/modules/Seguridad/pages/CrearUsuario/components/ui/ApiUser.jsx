import React, { useEffect, useState } from "react";
import axios from "axios";
import { URLAPIUSUARIO } from "../../compenetes/reuse/ConstObj";
import InputFormI from "./InputForm";
import Spinner from "../../../../../../components/Spinner";
import { Spin } from "antd";
import { Usuario } from "../../compenetes/reuse/ConstObj";
export default function ApiUser(props) {
  const { disabled, indice, ButtonView, textButton, load } = props;
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  if (load == true) {
    return (
      <InputFormI
        usuarios={Usuario}
        disabled={disabled}
        indice={indice}
        ButtonView={ButtonView}
        textButton={textButton}
        load={load}
      ></InputFormI>
    );
  }
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get(`${URLAPIUSUARIO}${indice}/`);
        setUsuarios(response.data);
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
      <div className="h-full flex justify-center items-center">
        <Spin />
      </div>
    );
  }

  return (
    <InputFormI
      usuarios={usuarios}
      disabled={disabled}
      indice={indice}
      ButtonView={ButtonView}
      textButton={textButton}
      load={load}
    ></InputFormI>
  );
}
