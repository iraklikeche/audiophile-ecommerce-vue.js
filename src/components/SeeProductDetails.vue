<template>
  <button
    @click="seeProductDetails"
    :class="{
      'bg-black': isBlackBackground,
      'bg-[#D87D4A]': !isBlackBackground,
    }"
    class="text-white text-xs hover:opacity-70 py-3 px-6 tracking-[1px] font-bold transition-opacity"
  >
    SEE PRODUCT
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  productId: Number, // Pass the product ID as a prop from the parent component
  isBlackBackground: Boolean,
});

const router = useRouter();

const seeProductDetails = () => {
  // Use Vue Router to navigate to the ProductDetails page
  router.push({
    name: "product",
    params: { product: props.productId },
  });
};
</script>
