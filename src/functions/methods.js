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

// export const putAxios = (url, headers, config, setLoading) => {
//   axios
//     .get(url, { headers })
//     .then((response) => {
//       // Manejar la respuesta exitosa aquí
//       setGeneral(response.data);
//       setLoading(true);
//     })
//     .catch((error) => {
//       // Manejar cualquier error que ocurra durante la solicitud
//       console.error("Error al hacer la solicitud:", error);
//       setLoading(true);
//     });
// };
