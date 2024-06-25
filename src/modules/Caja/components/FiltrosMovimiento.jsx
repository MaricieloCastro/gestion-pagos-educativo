import React, { useEffect, useState, useContext } from "react";
import AuthContext from "@/contexts/AuthContext";
import { enlaces } from "@/utils/rutas";
import moment from "moment";
import CallFilter from "@/components/Listas/CallFilter";
import InputFiltros from "@/components/Listas/Filtros/InputFiltros";
import { Link } from "react-router-dom";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import PdfMovimientosDia from "./PdfMovimientosDia";
import { filterAdapter } from "@/components/Listas/CallFilter/filterAdapter";
import { tipoUsuariosAPI } from "@/api/ApiRutas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Escudo from "../../../assets/img/escudoCiencias.png";
import { Spin } from "antd";
import axios from "axios";
import { Button } from "@/components/ui/button";
import "./FiltroMov.scss";
export const filtrosMovimiento = (
  table,
  classNameFiltros,
  setFilteringSearch,
  filteringSearch
) => {
  const optionsTipoUsuario = filterAdapter(tipoUsuariosAPI);
  const [timePicker, setTimePicker] = useState("12/02/2004");

  let parts = timePicker.split("/");
  let day = parseInt(parts[0], 10);
  let month = parseInt(parts[1], 10); // Los meses en JavaScript van de 0 a 11
  let year = parseInt(parts[2], 10);
  let date = `${year}-0${month}-${day}`;
  console.log(date);
  let { authTokens } = useContext(AuthContext);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };
  const [mov, setMov] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const mov = await axios.get(
          `http://127.0.0.1:8000/caja/api/movimiento/?fecha=${date}`,
          headers
        );
        console.log(mov.data);
        if (mov.data == undefined) {
          const mov = await axios.get(
            `http://127.0.0.1:8000/caja/api/movimiento/`,
            headers
          );
          setMov(mov.data);
        }
        setMov(mov.data);
        setLoading(true);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        setLoading(true);
      }
    };

    fetchUsuarios();
  }, [date]);
  if (!loading) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <Spin />
      </div>
    );
  }
  console.log(mov);
  return (
    <div className={`${classNameFiltros}__caja gap-1`}>
      <div className={`${classNameFiltros}__caja-filtros gap-1`}>
        {table.getHeaderGroups().map((headerGroup) => (
          <div
            className={`${classNameFiltros}__caja-filtros__selects  items-center`}
            key={headerGroup.id}
          >
            <CallFilter
              headerGroup={headerGroup}
              num={3}
              title="FECHA:"
              setTimePicker={setTimePicker}
            />
            <div
              className={`${classNameFiltros}__caja-boton flex justify-end items-center`}
            >
              <PDFDownloadLink
                document={<PdfMovimientosDia data={mov} />}
                fileName="PagosMatricula.pdf"
              >
                <Button type="button" className="text-white mr-5 ">
                  Generar Reporte <FontAwesomeIcon icon={faFilePdf} />
                </Button>
              </PDFDownloadLink>
            </div>
          </div>
        ))}
        <div
          className={`${classNameFiltros}__caja-filtros__search gap-3 items-center mt-5 flex`}
        >
          <InputFiltros
            filteringSearch={filteringSearch}
            setFilteringSearch={setFilteringSearch}
          />
        </div>
      </div>
    </div>
  );
};
