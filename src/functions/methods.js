import axios from "axios";

export const getAxios = (url, headers, setGeneral, setLoading) => {
  axios
    .get(url, { headers })
    .then((response) => {
      // Manejar la respuesta exitosa aquí
      setGeneral(response.data);
      setLoading(true);
    })
    .catch((error) => {
      // Manejar cualquier error que ocurra durante la solicitud
      console.error("Error al hacer la solicitud:", error);
      setLoading(true);
    });
};

export const putAxios = (url, data, headers, setLoading) => {
  axios
    .put(url, data, { headers })
    .then((response) => {
      // Manejar la respuesta exitosa aquí
      console.log(response.data);
      setLoading(true);
    })
    .catch((error) => {
      // Manejar cualquier error que ocurra durante la solicitud
      console.error("Error al hacer la solicitud:", error);
      setLoading(true);
    });
};
