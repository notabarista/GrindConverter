import axios from "axios";

axios.defaults.baseURL = "https://nab-grinder-converter.herokuapp.com";

export async function getAllGrinders() {
    const resp = await axios.get("/grinder/all");
    return resp.data;
}

export async function getAllBrewingMethods() {
  const resp = await axios.get("/brewing/all");
  return resp.data;
}

export async function getSizesByGrinderId(grinderId) {
  const resp = await axios.get("/grinder/size/byGrinder?grinder="+grinderId);
  return resp.data;
}