import { useContext, useEffect, useState } from "react";
import AuthContext from "@/contexts/AuthContext";
import { getAxiosSimple } from "@/functions/methods";

const OPTIONS = [
    {
        value: "",
        label: "TODOS",
    }
]

export const filterAdapter = (api) => {
    let { authTokens } = useContext(AuthContext);
    const [options, setOptions] = useState([])

    useEffect(() => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens?.access),
        };

        getAxiosSimple(api, headers, setOptions)
    }, [])

    const newOPTIONS = options.filter(option => option.estado === true).map(option => ({
        value: option.nombre,
        label: option.nombre,
    }))

    const completeOptions = [...OPTIONS, ...newOPTIONS]

    return completeOptions;
}