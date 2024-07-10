import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./PagosGeneral.scss";
import MenuLateral from "@/components/MenuLateral";
import axios from "axios";
import FormPagos from "./components/FormPagos";
import { getAxios, postAxios, putAxios } from "@/functions/methods";
import AuthContext from "@/contexts/AuthContext";
import { Button, Spin } from "antd";
import Escudo from "../../../../assets/img/escudoCiencias.png";
import { TIPOPAGOURL } from "@/modules/Seguridad/pages/CrearUsuario/compenetes/reuse/ConstObj";
import PdfPagoa from "./components/PdfPagos";

export default function PagosGeneral() {
  const param = useParams();
  const [general, setGeneral] = useState([]);
  const [loading, setLoading] = useState([]);
  const [tipo_pago, setTipoPago] = useState([]);
  const [pendiente, setPendiente] = useState([]);
  const [correlativo, setCorrelativo] = useState([]);
  const [reload, setReload] = useState();
  const [error, setError] = useState();
  const [open, setOpen] = useState();
  let { authTokens, user } = useContext(AuthContext);
  const { id, pagos } = param;
  const URLALUMNOS = `http://127.0.0.1:8000/datos_alumno/api/estudiantes_activos/${id}/`;
  const URLPEDNIENTE = `http://127.0.0.1:8000/pagos/api/pediente/?id_alumno=${id}&id_tipo_pago=${pagos}`;
  const ESTADOPAGO = "http://127.0.0.1:8000/pagos/api/estado-deuda";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };
  const data = {
    personaId: "665248a370419f0015e8a074",
    personaToken:
      "DEV_f1qz2uXCRNohX1UBx1TpTbvUEIce7Owu3f1efWwVwyGKkrZcQrckN8ARE2LRHhpx",
    type: "03",
    serie: "B001",
  };
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const alumnos = await axios.get(URLALUMNOS, headers);
        const TipoPago = await axios.get(TIPOPAGOURL, headers);
        const pendiente = await axios.get(URLPEDNIENTE, headers);
        const EstadoDeuda = await axios.post(ESTADOPAGO, { id: id }, headers);
        setGeneral(alumnos.data);
        setTipoPago(TipoPago.data);
        setPendiente(pendiente.data);
        setLoading(false);
        const response = await axios.post(
          "https://back.apisunat.com/personas/lastDocument",
          data
        );
        console.log("operacion exitosa:", response.data);
        console.log("operacion exitosa:", EstadoDeuda.data);
        setCorrelativo(response.data);
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

  //Este es la pantalla para identificar que el alumno no tiene deudas
  if (pendiente.length === 0) {
    console.log(pendiente);
    return (
      <div className="body">
        <div className="body-dia">
          El alumno no tiene pendientes
          <img
            src="https://media1.tenor.com/m/Hw7f-4l0zgEAAAAd/check-green.gif"
            alt="Cool GIF"
          />
          <Link to="http://localhost:5173/lista-alumnos/">
            <Button>← Inicio</Button>
          </Link>
        </div>
      </div>
    );
  }
  //

  //Sacar el find, porque es lo que se está retrasando
  //Crear vistas para cada uno de los pendientes para que así se el find demore menos
  //Buscar otro método de busca del pendientes

  return (
    <div className="flex overflow-hidden h-screen blue-oscuro">
      <MenuLateral>
        <FormPagos
          general={general}
          tipo_pago={tipo_pago}
          pendientes={pendiente[0]}
          correlativo={correlativo}
        />
      </MenuLateral>
    </div>
  );
}
