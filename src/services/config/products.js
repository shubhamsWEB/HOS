const getProductsData = (params) => (({
    url: `/public/products/filter`,
    method: "get",
    params
  }));
  
  export { getProductsData };