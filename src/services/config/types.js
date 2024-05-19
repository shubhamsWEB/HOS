const getTypes = (params) => (({
    url: `/admin/constants/get/${params.type}`,
    method: "get",
    params
  }));
  
  export { getTypes };