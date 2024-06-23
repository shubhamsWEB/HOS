const postEnquire = (params) => (({
    url: `/public/product/${params.p_id}/enquire`,
    method: "post",
    data: {
        userId:params.u_id,
        message:params.message,
    }
  }));

  
  export { postEnquire};