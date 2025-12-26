import { doLogin } from "../config/login";
import RequestHandler from "../requestsHandler";

const doUserLogin = (params) =>
  new RequestHandler("apiUrl", doLogin(params))
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      console.log("🚀 ~ doUserLogin error:", error);
      console.log("🚀 ~ error.response:", error?.response);
      console.log("🚀 ~ error.response.data:", error?.response?.data);
      console.log("🚀 ~ error.response.status:", error?.response?.status);
      console.log("🚀 ~ error.config:", error?.config);
      throw error;
    });

export { doUserLogin };