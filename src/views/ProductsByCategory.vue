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
      <div
        v-for="(product, index) in categoryProducts"
        :key="product.id"
        class="grid grid-cols-2 pt-28 pb-12 gap-36 items-center justify-center"
      >
        <div
          :class="{ 'order-1': index % 2 === 0, 'order-2': index % 2 !== 0 }"
        >
          <img :src="product.categoryImage.desktop" alt="123" />
        </div>
        <div
          class="flex flex-col gap-4"
          :class="{ 'order-2': index % 2 === 0, 'order-1': index % 2 !== 0 }"
        >
          <h3
            class="text-[#D87D4A] font-medium text-base transform: uppercase tracking-[10px]"
          >
            New Product
          </h3>
          <h2 class="text-4xl font-bold transform: uppercase">
            {{ product.name }}
          </h2>
          <p class="text-black opacity-50 font-sm font-medium leading-6">
            {{ product.description }}
          </p>
          <div class="mt-4">
            <button
              class="text-white text-xs bg-btnDefault hover:opacity-70 py-3 px-6 tracking-[1px] font-bold transition-opacity"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
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
import data from "../data.json";

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
console.log(data[0].categoryImage.desktop);
</script>
