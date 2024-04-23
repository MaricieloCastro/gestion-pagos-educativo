import axios from "axios";
//import { error } from "console";
import exp from "constants";

export const getAxios = async (
  url,
  headers,
  setGeneral,
  setLoading,
  setError
) => {
  setLoading(false);
  try {
    const response = await axios.get(url, { headers });
    setGeneral(response.data);
    setLoading(true);
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
    setError(error.message);
    setLoading(true);
  }
};

export const putAxios = async (
  url,
  data,
  headers,
  setReload,
  reload,
  setError
) => {
  try {
    const response = await axios.put(url, data, { headers });
    console.log("operacion exitosa:", response);
    setReload(!reload);
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
    setError(error.message);
  }
};

export const postAxios = async (
  url,
  data,
  headers,
  setReload,
  reload,
  setError
) => {
  try {
    const response = await axios.post(url, data, { headers });
    console.log("Operación exsitosa", response);
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
    setError(error.message);
  }
};
