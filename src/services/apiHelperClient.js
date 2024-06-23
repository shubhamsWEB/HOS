export const getAllProducts = async (data) => {
    return fetch(`/publicapi/products`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
export const getAdminAllProducts = async (data) => {
    return fetch(`/api/products`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
export const deleteProduct = async (data) => {
    return fetch(`/api/products`,{method:'DELETE',body:JSON.stringify(data)}).then((res) => res.json());
  };
export const getAllTypes = async (data) => {
    return fetch(`/api/types`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
export const addNewPorduct = async (data) => {
    return fetch(`/api/newproduct`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
export const editPorduct = async (data) => {
    return fetch(`/api/editproduct`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
  
export const login = async (data) => {
    return fetch(`/publicapi/login`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
  
export const postEnquire = async (data) => {
    return fetch(`/publicapi/enquire`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
  