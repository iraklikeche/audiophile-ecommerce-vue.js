<template>
  <div class="px-8 lg:px-32 pt-20 pb-10">
    <GoBackButton />
  </div>
  <div v-if="product" class="">
    <ProductCard
      :key="product.id"
      :product="product"
      :index="index"
      :categoryProducts="[product]"
      :showAddToCart="true"
    />

    <div class="my-32 grid grid-cols-1 gap-12 lg:grid-cols-4 px-8 lg:px-32">
      <div class="col-span-3 lg:pr-36 pr-0">
        <h3 class="font-bold text-4xl transform: uppercase tracking-wider">
          Features
        </h3>
        <p class="text-black opacity-50 font-medium text-base mt-10 leading-7">
          {{ product.features }}
        </p>
      </div>
      <div class="col-span-1 sm:flex justify-between">
        <h3 class="font-bold text-4xl transform: uppercase tracking-wider">
          In the box
        </h3>
        <ul class="mt-10 sm:mt-0 flex flex-col gap-4">
          <li v-for="item in product.includes" class="flex items-center gap-8">
            <span class="text-[#D87D4A] text-base">{{ item.quantity }}x</span>
            <span class="text-black opacity-50">{{ item.item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-32 flex gap-10 px-8 lg:px-32">
      <div class="flex flex-col gap-10">
        <img
          :src="product.gallery.first.desktop"
          class="rounded-lg hover:scale-110 transition-all duration-500"
        />
        <img
          :src="product.gallery.second.desktop"
          class="rounded-lg hover:scale-110 transition-all duration-500"
        />
      </div>
      <div class="">
        <img
          :src="product.gallery.third.desktop"
          class="h-full rounded-lg hover:scale-110 transition-all duration-500"
        />
      </div>
    </div>

    <GeneralProducts />

    <LastSection />
  </div>

  <div v-else>...Loading</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/Product.js";
import { ref, onBeforeMount } from "vue";
import ProductCard from "../components/ProductCard.vue";
import GeneralProducts from "../components/GeneralProducts.vue";
import LastSection from "../components/LastSection.vue";
import GoBackButton from "../components/GoBackButton.vue";

const route = useRoute();

const productStore = useProductStore();
const product = ref(null);
let index = 0;

onBeforeMount(async () => {
  const productId = route.params.product;
  const productData = await productStore.getProductById(productId);
  if (productData) {
    product.value = productData;
  } else {
    // Handle the case where product data is not found
    console.warn(`Product '${productId}' not found.`);
  }
});
</script>
