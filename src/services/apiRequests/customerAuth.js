import { sendOTP, validateOTP, customerSignup, customerLogin } from "../config/customerAuth";
import RequestHandler from "../requestsHandler";

const doSendOTP = (params) =>
  new RequestHandler("apiUrl", sendOTP(params))
    .call()
    .then((data) => ({ data }))
    .catch((error) => {
      console.log("🚀 ~ error:", error);
      throw error;
    });

const doValidateOTP = (params) =>
  new RequestHandler("apiUrl", validateOTP(params))
    .call()
    .then((data) => ({ data }))
    .catch((error) => {
      console.log("🚀 ~ error:", error);
      throw error;
    });

const doCustomerSignup = (params) =>
  new RequestHandler("apiUrl", customerSignup(params))
    .call()
    .then((data) => ({ data }))
    .catch((error) => {
      console.log("🚀 ~ error:", error);
      throw error;
    });

const doCustomerLogin = (params) =>
  new RequestHandler("apiUrl", customerLogin(params))
    .call()
    .then((data) => ({ data }))
    .catch((error) => {
      console.log("🚀 ~ error:", error);
      throw error;
    });

export { doSendOTP, doValidateOTP, doCustomerSignup, doCustomerLogin };

