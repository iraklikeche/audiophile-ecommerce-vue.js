<template>
  <div
    class="flex justify-center items-center py-24 text-white bg-black tracking-[1px]"
  >
    <h1 class="text-5xl font-bold transform: uppercase">{{ category }}</h1>
    <!-- <div v-for="product in categoryProducts" :key="product.id">
      <p>This is name product: {{ product.name }}</p>
    </div> -->
  </div>

  <main>
    <div class="px-32">
      <GeneralProducts />
      <LastSection />
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onBeforeMount, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/Product.js";
import LastSection from "../components/LastSection.vue";
import GeneralProducts from "../components/GeneralProducts.vue";

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
