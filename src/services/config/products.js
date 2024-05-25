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
const addNewProductData = (params) => (({
    url: `/admin/new/product`,
    method: "post",
    data: {...params}
  }));
  
  export { getProductsData,getAdminProductsData,addNewProductData };