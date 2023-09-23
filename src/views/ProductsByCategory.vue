<template>
  <div
    class="flex justify-center items-center py-24 text-white bg-[#000] tracking-[1px]"
  >
    <h1 class="text-5xl font-bold transform: uppercase">{{ category }}</h1>
    <!-- <div v-for="product in categoryProducts" :key="product.id">
      <p>This is name product: {{ product.name }}</p>
    </div> -->
  </div>

  <main>
    <div class="px-32">
      <ProductCard
        v-for="(product, index) in categoryProducts"
        :key="product.id"
        :product="product"
        :index="index"
        :categoryProducts="categoryProducts"
      />
      <GeneralProducts />
      <LastSection />
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onBeforeMount, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/Product.js";
import LastSection from "../components/LastSection.vue";
import GeneralProducts from "../components/GeneralProducts.vue";
import ProductCard from "../components/ProductCard.vue";

const route = useRoute();
const category = computed(() => route.params.category);

const categoryStore = useProductStore();
const categoryProducts = ref([]);

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
    console.log(categoryProducts.value);
  } else {
    // Handle the case where data for the selected category doesn't exist
    console.warn(`Data for category '${categoryName}' not found.`);
  }
});
</script>
