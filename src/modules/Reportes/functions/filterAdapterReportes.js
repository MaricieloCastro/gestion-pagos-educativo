import { useContext, useEffect, useState } from "react";
import AuthContext from "@/contexts/AuthContext";
import { getAxios } from "@/functions/methods";

const OPTIONS = [
  {
    value: "",
    label: "TODOS",
  },
];

export const filterAdapterReportes = (api, setLoading) => {
  let { authTokens } = useContext(AuthContext);
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(authTokens?.access),
    };

    getAxios(api, headers, setOptions, setLoading, setError);
  }, []);

  const newOPTIONS = options
    .filter((option) => option.estado === true)
    .map((option) => ({
      value: option.nombre,
      label: option.nombre,
    }));

  const completeOptions = [...OPTIONS, ...newOPTIONS];

  return completeOptions;
};
