import React, { useContext, useEffect, useState } from "react";

import MenuLateral from '@/components/MenuLateral'
import Reporte from "../../components/Reporte";

import { reporteIngresosAPI, tipoPagoAPI } from "@/api/ApiRutas";
import AuthContext from "@/contexts/AuthContext";
import { getAxios } from "@/functions/methods";
import IngresoPDF from "../../components/PDF/IngresosPDF";

const Ingresos = () => {

    let { authTokens } = useContext(AuthContext);
    const [optionSelected, setOptionSelected] = useState("")
    const [triggerReporte, setTriggerReporte] = useState(true)

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
        };

        let url = `${reporteIngresosAPI}/?tipo_pago=${optionSelected}`

        getAxios(url, headers, setData, setLoading, setError)
    }, [triggerReporte])

    return (
        <MenuLateral>
            <Reporte loadingApiPDF={loading} apiFiltros={tipoPagoAPI} tittleFiltro="Tipo de pago:" apiReporte={data} nombreReporte="Ingresos" optionSelected={optionSelected} setOptionSelected={setOptionSelected} triggerReporte={triggerReporte} setTriggerReporte={setTriggerReporte} >
                <IngresoPDF data={data} />
            </Reporte>
        </MenuLateral>

    )
}

export default Ingresos