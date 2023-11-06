<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useProductStore } from "./stores/Product";
import { ref, watch, computed } from "vue";

const productStore = useProductStore();
const { cart } = storeToRefs(productStore);
const route = useRoute();
const showCart = ref(false);

const openCart = () => {
  showCart.value = !showCart.value;
};
watch(route, () => {
  // Close the cart when the route changes
  showCart.value = false;
});

const isLinkEnabled = computed(() => {
  return productStore.productIndex > 0;
});
</script>

<template>
  <div class="flex flex-col font-Manrope">
    <Navbar>
      <div class="relative">
        <div class="flex relative">
          <svg
            width="23"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer"
            @click="openCart"
          >
            <path
              d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </svg>
          <span
            class="text-[#D87D4A] font-bold text-lg absolute left-[100%] bottom-0 translate-x-1/2 translate-y-1/2"
            >{{ productStore.productIndex }}</span
          >
        </div>

        <div
          v-if="showCart"
          class="flex flex-col absolute z-50 right-0 top-[-50%] translate-y-[25%] shadow-2xl p-8 bg-white min-w-[300px]"
        >
          <div class="flex justify-between mb-8">
            <h4 class="text-black font-bold tracking-wide">
              CART (<span>{{ productStore.productIndex }}</span
              >)
            </h4>
            <span
              @click="productStore.clearCart()"
              class="text-black opacity-50 underline hover:text-[#D87D4A] transition-colors cursor-pointer"
              >Remove All</span
            >
          </div>

          <div
            v-if="true"
            v-for="item in cart"
            :key="item.id"
            class="flex items-center mb-8 gap-40"
          >
            <div class="flex gap-4">
              <img :src="item.image" class="w-[65px]" />
              <div class="flex flex-col justify-between">
                <span class="font-bold text-[15px]">{{ item.name }}</span>
                <span class="font-bold text-[14px] opacity-50"
                  >$ {{ item.price }}</span
                >
              </div>
            </div>

            <div>
              <input
                type="number"
                placeholder="0"
                class="bg-[#F1F1F1] px-2 py-2 w-24"
                v-model="item.quantity"
              />
            </div>
          </div>

          <div v-else class="my-4">
            <h1>No Product In Cart</h1>
          </div>

          <div class="flex justify-between">
            <span class="text-black opacity-50">TOTAL</span>
            <span class="text-black font-bold"
              >$ {{ productStore.totalPrice }}</span
            >
          </div>


          <RouterLink
            v-if="isLinkEnabled"
            :to="{ name: 'checkout' }"
            class="w-full bg-[#D87D4A] mt-4 px-8 py-3 transform: uppercase tracking-wider text-white text-xs hover:opacity-70 transition-opacity text-center"
          >
            Checkout
          </RouterLink>
 
        </div>
      </div>
    </Navbar>


  <RouterView v-slot="{ Component, route }">
  <transition name="fade" mode="out-in">
    <div :key="route.fullPath">  
      <component :is="Component"></component>
    </div>
  </transition>
</RouterView>
    <Footer />
  </div>
</template>

<style scoped>

.fade-enter-from,
.fade-leave-to{
  opacity:0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease-out;
}
</style>