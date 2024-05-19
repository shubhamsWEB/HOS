export const getAllProducts = async (data) => {
    return fetch(`/api/products`,{method:'POST',body:JSON.stringify(data)}).then((res) => res.json());
  };
  