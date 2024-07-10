import React, { useContext, useEffect, useState } from "react";

import MenuLateral from '@/components/MenuLateral'
import Reporte from "../../components/Reporte";

import { metodoPagoAPI, reporteMetodoPagoAPI } from "@/api/ApiRutas";
import { getAxios } from "@/functions/methods";
import AuthContext from "@/contexts/AuthContext";
import MetodoPagoPDF from "../../components/PDF/MetodoPagoPDF";

const MetodoPago = () => {

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

        let url = `${reporteMetodoPagoAPI}/?metodo=${optionSelected}`

        getAxios(url, headers, setData, setLoading, setError)
    }, [triggerReporte])

    return (
        <MenuLateral>
            <Reporte loadingApiPDF={loading} apiFiltros={metodoPagoAPI} tittleFiltro="Metodo de pago:" apiReporte={data} nombreReporte="Metodo de pago" optionSelected={optionSelected} setOptionSelected={setOptionSelected} triggerReporte={triggerReporte} setTriggerReporte={setTriggerReporte} >
                <MetodoPagoPDF data={data} />
            </Reporte>
        </MenuLateral>

    )
}

export default MetodoPago