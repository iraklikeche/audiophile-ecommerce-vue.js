<script setup>
import data from "../data.json";

console.log(data[3].image.hero);
</script>

<template>
  <div class="px-32">
    <div class="grid grid-cols-2 items-center pt-6 gap-28">
      <div class="py-24">
        <h4
          class="text-sm text-transform: uppercase tracking-[10px] font-medium text-white opacity-30"
        >
          New Product
        </h4>
        <h2
          class="text-transform: uppercase text-6xl text-white mt-8 tracking-[4px]"
        >
          {{ data[3].name }}
        </h2>
        <p class="text-white mt-8 font-medium opacity-60 leading-8">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div class="mt-16">
          <button
            class="text-white text-xs bg-btnDefault hover:opacity-70 py-3 px-6 tracking-[1px] font-bold transition-opacity"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
      <div
        class="custom-bg h-full bg-cover bg-center bg-no-repeat rounded-[10%]"
      ></div>
    </div>
    <main></main>
  </div>
</template>

<style scoped>
.custom-bg {
  background-image: url("../assets//product-xx99-mark-two-headphones/desktop/hero-image.jpg");
}
</style>
