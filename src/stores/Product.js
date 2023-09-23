import { ref, computed } from "vue";
import { defineStore } from "pinia";
import data from "../data.json";

export const useProductStore = defineStore("product", () => {
  const categoryData = ref(data);

  const setCategoryData = (data) => {
    categoryData.value = data; // Update the ref value
  };

  const getCategoryDataByName = (categoryName) => {
    return categoryData.value.filter((item) => item.category === categoryName);
  };

  return { categoryData, setCategoryData, getCategoryDataByName };
});
