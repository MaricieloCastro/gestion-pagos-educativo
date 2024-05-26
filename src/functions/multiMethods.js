import axios from "axios";

export const multiPatchModal = async (
  api,
  items,
  data,
  headers,
  setLoading,
  setSucess,
  setError
) => {
  const promises = items.map((item) =>
    axios.patch(`${api}${item.id}/`, data, { headers })
  );

  setLoading(true);
  try {
    const response = await Promise.all(promises);
    console.log("operacion exitosa:", response);
    setLoading(false);
    setSucess(true);
  } catch (error) {
    setLoading(false);
    setError(true);
  }
};
