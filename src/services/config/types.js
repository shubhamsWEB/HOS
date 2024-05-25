const getTypes = (params) => (({
    url: `/admin/constants/get/${params.type}`,
    method: "get",
    params
  }));
const getAllTypes = (params) => (({
    url: `/admin/constants/get/`,
    method: "get",
  }));
  
  export { getTypes,getAllTypes };