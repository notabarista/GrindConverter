import axios from "axios";

const baseURL = "https://nab-grinder-converter.herokuapp.com";

export async function getAllGrinders() {
    const resp = await axios.get(baseURL+"/grinder/all");
    return resp.data;
}

export async function getAllBrewingMethods() {
  const resp = await axios.get(baseURL+"/brewing/all");
  return resp.data;
}

export async function getSizesByGrinderId(grinderId) {
  const resp = await axios.get(baseURL+"/grinder/size/byGrinder?grinder="+grinderId);
  return resp.data;
}