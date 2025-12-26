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
export const getConstants = async () => {
    return fetch(`/publicapi/constants`,{method:'GET'}).then((res) => res.json());
  };
export const addNewPorduct = async (data) => {
    return fetch(`/api/newproduct`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
export const editPorduct = async (data) => {
    return fetch(`/api/editproduct`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
  
export const login = async (data) => {
    const res = await fetch(`/publicapi/login`,{method:'POST',body:JSON.stringify(data)});
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json?.error || `API is failing: Request failed with status code ${res.status}`);
    }
    return json;
  };
  
export const postEnquire = async (data) => {
    return fetch(`/publicapi/enquire`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };

export const getEnquiries = async () => {
    const res = await fetch(`/api/enquiries`,{method:'GET'});
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json?.error || `API is failing: Request failed with status code ${res.status}`);
    }
    return json;
  };

export const getProductEnquiries = async (productId) => {
    const res = await fetch(`/api/enquiries/${productId}`,{method:'GET'});
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json?.error || `API is failing: Request failed with status code ${res.status}`);
    }
    return json;
  };

export const getUserEnquiries = async (userId) => {
    const res = await fetch(`/api/enquiries/user/${userId}`,{method:'GET'});
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json?.error || `API is failing: Request failed with status code ${res.status}`);
    }
    return json;
  };
  
export const sendOTP = async (data) => {
    const res = await fetch(`/publicapi/customer/otp/send`,{method:'POST',body:JSON.stringify(data)});
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json?.error || `API is failing: Request failed with status code ${res.status}`);
    }
    return json;
  };

export const validateOTP = async (data) => {
    const res = await fetch(`/publicapi/customer/otp/validate`,{method:'POST',body:JSON.stringify(data)});
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json?.error || `API is failing: Request failed with status code ${res.status}`);
    }
    return json;
  };

export const customerSignup = async (data) => {
    const res = await fetch(`/publicapi/customer/signup`,{method:'POST',body:JSON.stringify(data)});
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json?.error || `API is failing: Request failed with status code ${res.status}`);
    }
    return json;
  };

export const customerLogin = async (data) => {
    const res = await fetch(`/publicapi/customer/login`,{method:'POST',body:JSON.stringify(data)});
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json?.error || `API is failing: Request failed with status code ${res.status}`);
    }
    return json;
  };

export const getUsers = async () => {
    const res = await fetch(`/api/users`,{method:'GET'});
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json?.error || `API is failing: Request failed with status code ${res.status}`);
    }
    return json;
  };
  