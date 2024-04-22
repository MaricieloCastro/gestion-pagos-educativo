import axios from "axios";

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
