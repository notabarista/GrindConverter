import axios from "axios";

const baseURL = "https://nab-grinder-converter.herokuapp.com";

export async function getAllData() {
  const resp = await axios.get(baseURL + "/grinder/all");
  return resp.data;
}
