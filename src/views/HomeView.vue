<script setup>
import GeneralProducts from "../components/GeneralProducts.vue";
import LastSection from "../components/LastSection.vue";
import data from "../data.json";
</script>

<template>
  <section class="bg-[#0E0E0E] h-screen px-32">
    <div
      class="grid grid-cols-2 items-center pt-6 gap-20 max-w-7xl mx-auto my-0"
    >
      <div class="py-24">
        <h2
          class="text-sm text-transform: uppercase tracking-[10px] font-medium text-white opacity-30"
        >
          New Product
        </h2>
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
    <GeneralProducts />

    <section class="product pb-32 px-32">
      <div
        class="container bg-[#D87D4A] grid grid-cols-2 gap-20 rounded-lg px-20"
      >
        <div class="flex justify-center">
          <img src="../assets/bg-1.png" class="pt-16" />
        </div>
        <div class="flex flex-col justify-center gap-6 pr-32">
          <h2
            class="text-6xl text-white font-bold transform: uppercase tracking-[2px]"
          >
            {{ data[5].name }}
          </h2>
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
      <div
        class="container bg-1 flex items-center mt-12 h-[350px] bg-cover bg-center bg-no-repeat rounded-lg"
      >
        <div class="pl-24 flex flex-col gap-8">
          <h2 class="text-3xl font-bold transform: uppercase tracking-[2px]">
            {{ data[4].name }}
          </h2>
          <button
            class="bg-[#000] hover:bg-[#4C4C4C] transition-colors text-white text-[14px] font-bold tracking-[1px] transform: uppercase px-8 py-4"
          >
            See Product
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-12 mt-12 rounded-lg">
        <div>
          <img
            src="../assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
            class="rounded-lg w-full"
          />
        </div>
        <div
          class="flex flex-col justify-center gap-8 bg-[#F1F1F1] pl-24 rounded-lg"
        >
          <h2 class="text-3xl font-bold transform: uppercase tracking-[2px]">
            {{ data[0].name.replace(" Wireless", "") }}
          </h2>
          <div>
            <button
              class="bg-[#000] hover:bg-[#4C4C4C] transition-colors text-white text-[14px] font-bold tracking-[1px] transform: uppercase px-8 py-4"
            >
              See Product
            </button>
          </div>
        </div>
      </div>
    </section>

    <LastSection />
  </main>
</template>

<style scoped>
.custom-bg {
  background-image: url("../assets//product-xx99-mark-two-headphones/desktop/hero-image.jpg");
}

.bg-1 {
  background-image: url("../assets//Bitmap.png");
}
</style>
