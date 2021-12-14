import axios from "axios";
import { url, course } from "./requests";

export async function courses() {
  const result = await axios.get(`${url}${course}`);
  console.log({ result });
  if (result.status === 200) {
    return result.data.data;
  }
  return [];
}

export async function courseDetail(id) {
  const result = await axios.get(`${url}${course}/${id}`);
  console.log({ result });
  if (result.status === 200) {
    return result.data.data;
  }
  return {};
}
