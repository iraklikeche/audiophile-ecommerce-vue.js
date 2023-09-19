<script setup>
import data from "../data.json";
</script>

<template>
  <div class="bg-[#0E0E0E]">
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
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
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
    </div>
  </div>
  <main>
    <section class="general-products px-32 py-32">
      <div class="flex items-center justify-between gap-5">
        <div
          class="flex flex-col items-center justify-center bg-[#f1f1f1] rounded-lg relative px-28 pt-20 max-w-[320px]"
        >
          <img
            class="absolute bottom-[50%] w-2/3 translate-y-[15%]"
            src="../assets/shared/desktop/image-category-thumbnail-headphones.png"
          />
          <p class="text-transform: uppercase tracking-[2px] font-bold text-lg">
            {{ data[3].category }}
          </p>
          <button class="my-4 text-sm font-bold opacity-50 tracking-[2px]">
            SHOP
          </button>
        </div>
        <div
          class="flex flex-col items-center justify-center bg-[#f1f1f1] rounded-lg relative px-28 pt-20 max-w-[320px]"
        >
          <img
            class="absolute bottom-[50%] w-2/3 translate-y-[15%]"
            src="../assets/shared/desktop/image-category-thumbnail-speakers.png"
          />
          <p class="text-transform: uppercase tracking-[2px] font-bold text-lg">
            {{ data[4].category }}
          </p>
          <button class="my-4 text-sm font-bold opacity-50 tracking-[2px]">
            SHOP
          </button>
        </div>
        <div
          class="flex flex-col items-center justify-center bg-[#f1f1f1] rounded-lg relative px-28 pt-20 max-w-[320px]"
        >
          <img
            class="absolute bottom-[50%] w-2/3 translate-y-[15%]"
            src="../assets/shared/desktop/image-category-thumbnail-earphones.png"
          />
          <p class="text-transform: uppercase tracking-[2px] font-bold text-lg">
            {{ data[0].category }}
          </p>
          <button class="my-4 text-sm font-bold opacity-50 tracking-[2px]">
            SHOP
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.custom-bg {
  background-image: url("../assets//product-xx99-mark-two-headphones/desktop/hero-image.jpg");
}
</style>
