<template>
  <!-- <div>
    <h1>this is {{ category }}</h1>
    <p>Hi {{ categoryData.name }}</p>
  </div> -->
  <div>
    <h1>This is Category of {{ category }}</h1>
    <!-- Display products for the selected category -->
    <div v-for="product in categoryProducts" :key="product.id">
      <p>This is name product: {{ product.name }}</p>
      <!-- Add other product details here -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import categoryData from "../data.json";
import { useProductStore } from "../stores/Product.js";

const route = useRoute();
const category = computed(() => route.params.category);

const categoryStore = useProductStore();
const categoryProducts = ref([]);
console.log(categoryProducts.value);

watch(route, async () => {
  try {
    const categoryName = route.params.category;
    const categoryData = await categoryStore.getCategoryDataByName(
      categoryName
    );
    categoryProducts.value = categoryData;
  } catch (error) {
    console.error("Error during watch:", error);
  }
});

// watch(route, async () => {
//   try {
//     categoryProducts.value = route.params.category;
//     if (categoryProducts.value) {
//       await getCategoryDataByName();
//     }
//   } catch (error) {
//     console.error("Error during onMounted:", error);
//   }
// });

onBeforeMount(() => {
  const categoryName = route.params.category;
  const dataForCategory = categoryStore.getCategoryDataByName(categoryName);

  if (dataForCategory) {
    categoryProducts.value = dataForCategory;
  } else {
    // Handle the case where data for the selected category doesn't exist
    console.warn(`Data for category '${categoryName}' not found.`);
  }
});
</script>
