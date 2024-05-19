export const getAllProducts = async (data) => {
    return fetch(`/publicapi/products`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
export const getAdminAllProducts = async (data) => {
    return fetch(`/api/products`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
  