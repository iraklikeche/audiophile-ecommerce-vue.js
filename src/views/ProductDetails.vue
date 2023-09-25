<template>
  <h1>Hello World</h1>
  <div class="container mx-auto mt-10">
    <h1 class="text-3xl font-semibold">{{ product.name }}</h1>
    <img
      :src="product.categoryImage.desktop"
      alt="Product Image"
      class="mt-4"
    />
    <p class="mt-4">{{ product.description }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/Product.js";
import { ref, onBeforeMount } from "vue";

const route = useRoute();

const productStore = useProductStore();
const product = ref(null);

onBeforeMount(async () => {
  const productId = route.params.product;
  const productData = await productStore.getProductById(productId);

  if (productData) {
    product.value = productData;
    console.log(product.value);
  } else {
    // Handle the case where product data is not found
    console.warn(`Product '${productId}' not found.`);
  }
});
</script>
