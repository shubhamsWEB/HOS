import { getAllTypes } from "../config/types";
import RequestHandler from "../requestsHandler";

const fetchTypes = (params) =>
  new RequestHandler("apiUrl", getAllTypes(params))
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      throw error;
    });

export { fetchTypes };