const postEnquire = (params) => (({
    url: `/public/product/${params.p_id}/enquire`,
    method: "post",
    data: {
        userId:params.u_id,
        message:params.message,
    }
  }));

const getEnquiries = () => (({
    url: `/admin/enquire/detailed`,
    method: "get",
  }));

const getProductEnquiries = (productId) => (({
    url: `/admin/enquire/product/${productId}`,
    method: "get",
  }));

const getUserEnquiries = (userId) => (({
    url: `/admin/enquire/user/${userId}`,
    method: "get",
  }));

  
  export { postEnquire, getEnquiries, getProductEnquiries, getUserEnquiries};