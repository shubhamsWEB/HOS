const getProductsData = (params) => (({
    url: `/public/products/filter`,
    method: "get",
    params
  }));
const getAdminProductsData = (params) => (({
    url: `/admin/new/product`,
    method: "get",
    params
  }));
  
  export { getProductsData,getAdminProductsData };