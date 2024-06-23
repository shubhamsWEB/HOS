import { postEnquire } from "../config/enquire";
import RequestHandler from "../requestsHandler";

const doProductEnquire = (params) =>
  new RequestHandler("apiUrl", postEnquire(params))
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      console.log("🚀 ~ error:", error);
      throw error;
    });

export { doProductEnquire };