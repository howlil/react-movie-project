import axios from "axios";

const base = import.meta.env.VITE_API_BASE_URL;
const apikey = import.meta.env.VITE_API_KEY;

export default async function getMovie() {
  return await axios
    .get(`${base}/movie/changes`, {
      params: {
        api_key: apikey,
      },
    })
    .then((response) => response.data.results)
    .catch((eror) => console.log(eror));
}
