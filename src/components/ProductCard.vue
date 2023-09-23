<template>
  <div
    v-for="(product, index) in categoryProducts"
    :key="product.id"
    class="grid grid-cols-2 pt-28 pb-12 gap-36 items-center justify-center"
  >
    <div :class="{ 'order-1': index % 2 === 0, 'order-2': index % 2 !== 0 }">
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
</template>

<script setup>
const props = defineProps({
  product: Object,
  index: Number,
  categoryProducts: Array,
});
</script>
