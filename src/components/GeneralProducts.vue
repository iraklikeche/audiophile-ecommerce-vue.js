<template>
  <section class="general-products px-8 lg:px-32 pt-48 pb-44">
    <div class="mx-auto my-0 flex flex-col lg:flex-row gap-40 lg:gap-12">
      <div
        class="flex flex-col items-center justify-end pt-28 bg-[#f1f1f1] rounded-lg relative w-full"
      >
        <img
          class="w-[200px] absolute bottom-[40%]"
          src="../../public/assets/shared/desktop/image-category-thumbnail-headphones.png"
        />
        <p class="text-transform: uppercase tracking-[1px] font-bold font-lg">
          {{ data[3].category }}
        </p>
        <RouterLink
          :to="{ name: 'category', params: { category: data[3].category } }"
        >
          <button
            class="my-4 text-sm font-bold opacity-50 tracking-[2px] hover:text-[#D87D4A] hover:opacity-100 transition-all"
          >
            SHOP
          </button>
        </RouterLink>
      </div>
      <div
        class="flex flex-col items-center justify-end pt-28 bg-[#f1f1f1] rounded-lg relative w-full"
      >
        <img
          class="w-[200px] absolute bottom-[40%]"
          src="../../public/assets/shared/desktop/image-category-thumbnail-speakers.png"
        />
        <p class="text-transform: uppercase tracking-[1px] font-bold text-lg">
          {{ data[4].category }}
        </p>
        <RouterLink
          :to="{ name: 'category', params: { category: data[4].category } }"
        >
          <button
            class="my-4 text-sm font-bold opacity-50 tracking-[2px] hover:text-[#D87D4A] hover:opacity-100 transition-all"
          >
            SHOP
          </button>
        </RouterLink>
      </div>

      <div
        class="flex flex-col items-center justify-end pt-28 bg-[#f1f1f1] rounded-lg relative w-full"
      >
        <img
          class="w-[200px] absolute bottom-[40%]"
          src="../../public/assets/shared/desktop/image-category-thumbnail-earphones.png"
        />
        <p class="text-transform: uppercase tracking-[1px] font-bold text-lg">
          {{ data[0].category }}
        </p>
        <RouterLink
          :to="{ name: 'category', params: { category: data[0].category } }"
        >
          <button
            class="my-4 text-sm font-bold opacity-50 tracking-[2px] hover:text-[#D87D4A] hover:opacity-100 transition-all"
          >
            SHOP
          </button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from "../data.json";
import { RouterLink } from "vue-router";
</script>
