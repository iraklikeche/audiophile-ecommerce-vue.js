import { ref, computed } from "vue";
import { defineStore } from "pinia";
import data from "../data.json";

export const useProductStore = defineStore("product", () => {
  const productData = ref(data);

  const getCategoryDataByName = (categoryName) => {
    return productData.value.filter((item) => item.category === categoryName);
  };
  const getProductById = (id) => {
    // console.log("Searching for product with id:", id);

    // Convert the id to a number (since it's stored as a string in route params)
    const productId = parseInt(id);

    // Use find to search for the product by id
    const product = productData.value.find((item) => item.id === productId);
    return product;
  };

  return {
    productData,
    getCategoryDataByName,
    getProductById,
  };
});
