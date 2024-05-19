const doLogin = (params) => (({
    url: `/v1/login`,
    method: "post",
    data: {
        ...params
    }
  }));
  
  export { doLogin };