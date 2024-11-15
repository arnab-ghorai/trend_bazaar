import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const getProducts = async () => {
  try {
    const response = await api.get("products");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
