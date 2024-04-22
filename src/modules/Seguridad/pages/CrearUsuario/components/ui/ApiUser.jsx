import React, { useEffect, useState } from "react";
import axios from "axios";
import { URLAPIUSUARIO } from "../../compenetes/reuse/ConstObj";
import InputFormI from "./InputForm";
import Spinner from "../../../../../../components/Spinner"
export default function ApiUser(props) {
  const { disabled, indice, ButtonView, textButton } = props;
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
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
    return <Spinner></Spinner>;
  }
  return (
    <InputFormI
      usuarios={usuarios}
      disabled={disabled}
      indice={indice}
      ButtonView={ButtonView}
      textButton={textButton}
    ></InputFormI>
  );
}
