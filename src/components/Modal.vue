<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="props.modalActive"
        class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
      >
        <Transition name="modal-inner">
          <div
            v-if="props.modalActive"
            class="flex flex-col text-black gap-6 bg-white self-start mt-32 max-w-screen-md rounded-xl p-8"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="32" cy="32" r="32" fill="#D87D4A" />
                <path
                  d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
                  stroke="white"
                  stroke-width="4"
                />
              </svg>
            </div>
            <h1 class="transform: uppercase font-bold text-3xl tracking-wider">
              Thank you for your order
            </h1>
            <p class="opacity-50">
              You will receive an email confirmation shortly.
            </p>
            <div
              class="bg-black py-12 rounded-lg mt-4 flex flex-col items-center justify-center"
            >
              <h2
                class="transform: uppercase text-white tracking-wider opacity-50"
              >
                Grand total
              </h2>
              <span class="text-white"
                >$ {{ productStore.totalPriceCheckout }}</span
              >
            </div>
            <RouterLink :to="{ name: 'home' }">
              <button
                class="w-full bg-[#D87D4A] text-white mt-8 bg-weather-primary py-4 transform: uppercase"
                @click="$emit('close-modal'), productStore.clearCart()"
              >
                Back To Home
              </button>
            </RouterLink>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useProductStore } from "../stores/Product";

const productStore = useProductStore();

defineEmits(["close-modal"]);
const props = defineProps({ modalActive: Boolean });
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-inner-leave-to {
  opacity: 0;
}
</style>
