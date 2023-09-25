import { ref, computed } from "vue";
import { defineStore } from "pinia";
import data from "../data.json";

export const useProductStore = defineStore("product", () => {
  const categoryData = ref(data);

  const getCategoryDataByName = (categoryName) => {
    return categoryData.value.filter((item) => item.category === categoryName);
  };
  const getProductById = (id) => {
    console.log("Searching for product with id:", id);

    // Convert the id to a number (since it's stored as a string in route params)
    const productId = parseInt(id);

    // Use find to search for the product by id
    const product = categoryData.value.find((item) => item.id === productId);

    if (product) {
      console.log("Found product:", product);
    } else {
      console.warn(`Product with id '${id}' not found.`);
    }

    return product;
  };

  return {
    categoryData,
    getCategoryDataByName,
    getProductById,
  };
});
