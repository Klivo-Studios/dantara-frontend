import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Get all products
export const getProducts = () => API.get("/products");

// Get one product by ID
export const getProductById = (id) => API.get(`/products/${id}`);

// Add a new product
export const addProduct = (product) => API.post("/products", product);

// Update a product
export const updateProduct = (id, product) =>
  API.put(`/products/${id}`, product);

// Delete a product
export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);

export default API;