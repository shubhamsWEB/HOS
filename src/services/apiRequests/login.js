import { doLogin } from "../config/login";
import RequestHandler from "../requestsHandler";

const doUserLogin = (params) =>
  new RequestHandler("apiUrl", doLogin(params))
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      throw error;
    });

export { doUserLogin };