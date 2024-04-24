import axios from "axios";
import { toast } from "react-toastify";

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
  setError,
  allowToast,
  funcGeneral
) => {
  try {
    const response = await axios.post(url, data, { headers });
    console.log("Proceso exitoso:", response.data);
    if (allowToast) {
      toast.success(response.data.message);
    }
    funcGeneral();
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
    if (allowToast) {
      toast.error(error.response.data.message);
    }
  }
};
