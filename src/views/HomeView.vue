<script setup>
import data from "../data.json";
// import hero from "../assets/product-xx99-mark-two-headphones/desktop/hero-image.jpg";
// ./assets/product-xx99-mark-two-headphones/desktop/hero-image.jpg

console.log(data[3].image.hero);

const hero = data[3].image.hero;
console.log(hero);
// ./assets/product-yx1-earphones/desktop/image-product.jpg
</script>

<template>
  <div class="px-32">
    <div class="grid grid-cols-3 items-center pt-6">
      <div class="py-24 col-span-1">
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
            class="text-white text-xs bg-btnDefault py-3 px-6 tracking-[1px] font-bold"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
      <div class="col-span-2">
        <img :src="{ hero }" alt="hero" />
      </div>
    </div>
    <main></main>
  </div>
</template>
