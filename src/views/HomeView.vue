<script setup>
import data from "../data.json";
</script>

<template>
  <section class="bg-[#0E0E0E] h-screen px-32">
    <div
      class="grid grid-cols-2 items-center pt-6 gap-20 max-w-7xl mx-auto my-0"
    >
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
  </section>
  <main>
    <section class="general-products px-32 pt-48 pb-44">
      <div class="container mx-auto my-0 flex gap-8">
        <div
          class="flex flex-col items-center justify-end pt-28 bg-[#f1f1f1] rounded-lg relative w-full"
        >
          <img
            class="w-[200px] absolute bottom-[40%]"
            src="../assets/shared/desktop/image-category-thumbnail-headphones.png"
          />
          <p class="text-transform: uppercase tracking-[1px] font-bold font-lg">
            {{ data[3].category }}
          </p>
          <button class="my-4 text-sm font-bold opacity-50 tracking-[2px]">
            SHOP
          </button>
        </div>
        <div
          class="flex flex-col items-center justify-end pt-16 bg-[#f1f1f1] rounded-lg relative w-full"
        >
          <img
            class="w-[200px] absolute bottom-[40%]"
            src="../assets/shared/desktop/image-category-thumbnail-speakers.png"
          />
          <p class="text-transform: uppercase tracking-[1px] font-bold text-lg">
            {{ data[4].category }}
          </p>
          <button class="my-4 text-sm font-bold opacity-50 tracking-[2px]">
            SHOP
          </button>
        </div>
        <div
          class="flex flex-col items-center justify-end pt-24 bg-[#f1f1f1] rounded-lg relative w-full"
        >
          <img
            class="w-[200px] absolute bottom-[40%]"
            src="../assets/shared/desktop/image-category-thumbnail-earphones.png"
          />
          <p class="text-transform: uppercase tracking-[1px] font-bold text-lg">
            {{ data[0].category }}
          </p>
          <button class="my-4 text-sm font-bold opacity-50 tracking-[2px]">
            SHOP
          </button>
        </div>
      </div>
    </section>

    <section class="product pb-32 px-32">
      <div
        class="container bg-[#D87D4A] grid grid-cols-2 gap-20 rounded-lg px-20"
      >
        <div class="flex justify-center">
          <img src="../assets/bg-1.png" class="pt-16" />
        </div>
        <div class="flex flex-col justify-center gap-6 pr-32">
          <h4
            class="text-6xl text-white font-bold transform: uppercase tracking-[2px]"
          >
            {{ data[5].name }}
          </h4>
          <p class="text-base font-medium text-white opacity-50 leading-7">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <div class="mt-6">
            <button
              class="bg-[#000] hover:bg-[#4C4C4C] transition-colors text-white text-[14px] font-bold tracking-[1px] transform: uppercase px-8 py-4"
            >
              See Product
            </button>
          </div>
        </div>
      </div>
      <div class="rounded-lg"></div>
    </section>
  </main>
</template>

<style scoped>
.custom-bg {
  background-image: url("../assets//product-xx99-mark-two-headphones/desktop/hero-image.jpg");
}

.bg-1 {
  background-image: url("../assets/shared/desktop/image-zx9-speaker.jpg");
}
</style>
