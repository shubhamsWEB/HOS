import { getUsers } from "../config/users";
import RequestHandler from "../requestsHandler";

const fetchUsers = () =>
  new RequestHandler("apiUrl", getUsers())
    .call()
    .then((data) => {
        return({ data })})
    .catch((error) => {
      console.log("🚀 ~ error:", error);
      throw error;
    });

export { fetchUsers };

