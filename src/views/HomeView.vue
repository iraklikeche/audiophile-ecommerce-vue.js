<script setup>
import GeneralProducts from "../components/GeneralProducts.vue";
import LastSection from "../components/LastSection.vue";
import SeeProductDetails from "../components/SeeProductDetails.vue";
import data from "../data.json";

import { useRouter } from "vue-router";

const router = useRouter();

const seeProductDetails = (productId) => {
  // Use Vue Router to navigate to the ProductDetails page
  router.push({
    name: "product",
    params: { product: productId },
  });
};
</script>

<template>
  <section class="bg-[#0E0E0E] h-screen lg:px-32">
    <div
      class="grid lg:grid-cols-2 items-center pt-6 gap-20 max-w-7xl mx-auto my-0 bg-[url('../../public/assets//product-xx99-mark-two-headphones/tablet/Bitmap.png')] lg:bg-none h-full bg-cover bg-center bg-no-repeat rounded-[10%]"
    >
      <div
        class="flex flex-col items-center lg:items-start justify-center py-24"
      >
        <h2
          class="text-sm text-transform: uppercase tracking-[10px] font-medium text-white opacity-30"
        >
          New Product
        </h2>
        <h2
          class="text-transform: uppercase font-bold xl:text-6xl text-5xl text-center lg:text-left text-white mt-8 tracking-[4px]"
        >
          {{ data[3].name }}
        </h2>
        <p
          class="text-white mt-8 font-medium opacity-60 leading-8 text-center lg:text-left"
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div class="mt-16">
          <SeeProductDetails
            :productId="data[3].id"
            :isBlackBackground="false"
          />
        </div>
      </div>
      <div
        class="custom-bg h-full bg-cover bg-center bg-no-repeat rounded-[10%] hidden lg:block"
      ></div>
    </div>
  </section>
  <main>
    <GeneralProducts />

    <section class="product pb-32 px-8 lg:px-32">
      <div
        class="bg-[#D87D4A] grid grid-cols-1 lg:grid-cols-2 justify-center gap-20 rounded-lg sm:px-20"
      >
        <div class="flex justify-center">
          <img
            src="../../public/assets/bg-1.png"
            class="pt-16 w-1/2 lg:w-full"
          />
        </div>
        <div
          class="flex flex-col justify-center gap-6 items-center lg:items-start"
        >
          <h2
            class="xl:text-6xl text-5xl md:text-center lg:text-left text-white font-bold transform: uppercase tracking-[2px] text-center"
          >
            {{ data[5].name }}
          </h2>
          <p
            class="text-base font-medium text-white opacity-50 leading-7 text-center lg:text-left"
          >
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <div class="mt-6 pb-12 md:text-center lg:text-left">
            <SeeProductDetails
              :productId="data[5].id"
              :isBlackBackground="true"
            />
          </div>
        </div>
      </div>
      <div
        class="bg-1 flex items-center mt-12 h-[350px] bg-cover bg-center bg-no-repeat rounded-lg"
      >
        <div class="pl-24 flex flex-col gap-8">
          <h2 class="text-3xl font-bold transform: uppercase tracking-[2px]">
            {{ data[4].name }}
          </h2>
          <SeeProductDetails
            :productId="data[4].id"
            :isBlackBackground="true"
          />
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-12 md:gap-4 mt-12 rounded-lg">
        <div>
          <img
            src="../../public/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
            class="rounded-lg w-full sm:h-full"
          />
        </div>
        <div
          class="flex flex-col justify-center gap-8 bg-[#F1F1F1] pl-24 sm:p-8 py-16 rounded-lg"
        >
          <h2
            class="text-3xl md:text-xl font-bold transform: uppercase tracking-[2px]"
          >
            {{ data[0].name.replace(" Wireless", "") }}
          </h2>
          <div>
            <SeeProductDetails
              :productId="data[0].id"
              :isBlackBackground="true"
            />
          </div>
        </div>
      </div>
    </section>

    <LastSection />
  </main>
</template>

<style scoped>
.custom-bg {
  background-image: url("../../public/assets//product-xx99-mark-two-headphones/desktop/hero-image.jpg");
}

.bg-1 {
  background-image: url("../../public/assets//Bitmap.png");
}
</style>
