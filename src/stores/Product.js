import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const categoryData = ref([]);

  const setCategoryData = (data) => {
    categoryData.data;
  };

  return { categoryData, setCategoryData };
});
