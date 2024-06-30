const getProductsData = (params) => (({
    url: `/public/products/filter`,
    method: "get",
    params
  }));
const getProduct = (params) => (({
    url: `/public/product/${params.id}`,
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
const removeProduct= (params) => (({
    url: `/admin/new/product/${params.id}`,
    method: "delete",
  }));
const editProduct= (params) => (({
    url: `/admin/new/product/${params.id}`,
    method: "put",
    data: {productName:params.productName,offer:params.offer,}
  }));
  
  export { getProductsData,getAdminProductsData,addNewProductData,removeProduct,getProduct ,editProduct};