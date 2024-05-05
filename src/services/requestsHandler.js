import { apiUrl } from './apiConfig';
import { errorHandler, successHandler } from './responseHandler';

const serverMap = {apiUrl };

class HandleRequest {
  server = apiUrl;

  config = {};

  static Logger = null;

  constructor(server, config) {
    this.server = serverMap[server];
    this.config = { headers: HandleRequest.headers, ...config };
  }

  call = (config = this.config, successFn = successHandler, failureFn = errorHandler) =>
    this.server({ headers: HandleRequest.headers, ...config })
      .then((response) => {

        return Promise.resolve(successFn(response))
      })
      .catch((error) => Promise.reject(failureFn(error)));

  static setHeader = (headers = {}) => {

    // temporary hardcoded
    HandleRequest.headers = {
      ...headers,
    };

    HandleRequest.Logger = headers?.memberlogin;
  };

  static setMinHeader;

  static getHeader = () => HandleRequest.headers;

  static getLogger = () => HandleRequest.Logger;
}
export default HandleRequest;
