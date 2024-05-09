import axios from "axios";
const api = "https://countries-restapi.vercel.app/all";
export const fetchData = async () => {
  const res = await axios.get(api);
  const data = await res.data;
  return data;
};
