<template>
  <div class="px-32 bg-[#f1f1f1]">
    <div class="pb-12 pt-20">
      <GoBackButton />
    </div>
    <div class="pb-40 grid grid-cols-[2fr,1fr] gap-8">
      <div class="bg-white shadow-lg px-12 py-16 rounded-lg">
        <h1 class="transform: uppercase text-3xl font-bold tracking-wide mb-12">
          Checkout
        </h1>
        <form>
          <!-- Billing Details -->
          <p
            class="transform: uppercase text-[#D87D4A] font-bold tracking-wide mb-4"
          >
            Billing details
          </p>
          <div class="grid grid-cols-2 gap-8 mb-16">
            <div class="flex flex-col gap-2">
              <label class="font-bold">Name</label>
              <input class="border p-4 rounded-lg" type="text" placeholder="" />
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-bold">Email</label>

              <input
                class="border p-4 rounded-lg"
                type="email"
                placeholder=""
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="font-bold">Phone Number</label>
              <input class="border p-4 rounded-lg" type="text" placeholder="" />
            </div>
          </div>

          <!-- Shipping Info -->
          <p
            class="transform: uppercase text-[#D87D4A] font-bold tracking-wide mb-4"
          >
            Shipping info
          </p>
          <div class="flex flex-col gap-8 mb-8">
            <label>Adress</label>
            <input
              class="w-full border p-4 rounded-lg"
              type="text"
              placeholder=""
            />
          </div>
          <div class="grid grid-cols-2 gap-8 mb-16">
            <div class="flex flex-col gap-2">
              <label class="font-bold">Zip Code</label>
              <input class="border p-4 rounded-lg" type="number" />
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-bold">City</label>
              <input class="border p-4 rounded-lg" type="text" />
            </div>
            <div class="flex flex-col gap-2 mb-8">
              <label class="font-bold">Country</label>
              <input class="border p-4 rounded-lg" type="text" />
            </div>
          </div>

          <!-- Payment Details -->
          <p
            class="transform: uppercase text-[#D87D4A] font-bold tracking-wide mb-4"
          >
            Payment Details
          </p>

          <div class="grid grid-cols-2 gap-8 mb-8">
            <p>Payment Method</p>
            <div class="flex flex-col gap-6">
              <div
                class="flex gap-2 border p4 rounded-lg p-4 cursor-pointer"
                @click="handleDivClick(eMoneyRadio)"
              >
                <input
                  type="radio"
                  id="e-money"
                  name="drone"
                  value="e-money"
                  checked
                  ref="eMoneyRadio"
                />
                <label for="e-money">e-money</label>
              </div>

              <div
                class="flex gap-2 border p4 rounded-lg p-4 cursor-pointer"
                @click="handleDivClick('cashOnDeliveryRadio')"
              >
                <input
                  type="radio"
                  id="cash on Delivery"
                  name="drone"
                  value="cash on Delivery"
                  ref="cashOnDeliveryRadio"
                />
                <label for="cash on Delivery">Cash on Delivery</label>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-8">
            <div class="flex flex-col">
              <label>e-Money Number</label>
              <input class="w-full border p-4 rounded-lg" type="text" />
            </div>
            <div class="flex flex-col">
              <label>e-Money PIN</label>
              <input class="w-full border p-4 rounded-lg" type="number" />
            </div>
          </div>
        </form>
      </div>

      <!-- Summary -->
      <div>
        <div class="bg-white shadow-lg p-12 rounded-lg">
          <h2
            class="transform: uppercase font-bold tracking-wider text-lg mb-8"
          >
            Summary
          </h2>
          <div
            v-for="item in cart"
            :key="cart.id"
            class="flex items-center justify-between mb-8"
          >
            <div class="flex items-center gap-4">
              <img :src="item.image" class="w-[65px]" />
              <div class="flex flex-col gap-2">
                <span class="font-bold text-[15px]">{{ item.slug }}</span>
                <span class="font-bold text-[14px] opacity-50"
                  >${{ item.price }}</span
                >
              </div>
            </div>
            <span class="text-black opacity-50 font-bold"
              >x{{ item.quantity }}</span
            >
          </div>

          <div class="flex justify-between mb-4">
            <span class="text-black text-sm opacity-50 transform: uppercase"
              >Total</span
            >
            <span class="font-bold text-black"
              >$ {{ productStore.totalPrice }}</span
            >
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-black text-sm opacity-50 transform: uppercase"
              >Shipping</span
            >
            <span class="font-bold text-black">$ 50</span>
          </div>
          <div class="flex justify-between mb-8">
            <span class="text-black text-sm opacity-50 transform: uppercase"
              >Grand Total</span
            >
            <span class="font-bold text-[#d87D4A]"
              >$ {{ productStore.totalPriceCheckout }}</span
            >
          </div>

          <button
            class="w-full bg-[#D87D4A] font-bold mt-4 px-8 py-4 transform: uppercase tracking-wider text-white text-xs hover:opacity-70 transition-opacity"
          >
            Continue & Pay
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import GoBackButton from "../components/GoBackButton.vue";
import { useProductStore } from "../stores/Product";
import { ref } from "vue";

const productStore = useProductStore();

const cart = productStore.getCart;
console.log(cart);

const eMoneyRadio = ref(null);
const cashOnDeliveryRadio = ref(null);

const handleDivClick = (radioRef) => {
  // Programmatically click the radio input
  if (radioRef === "eMoneyRadio") {
    eMoneyRadio.value.click();
  } else if (radioRef === "cashOnDeliveryRadio") {
    cashOnDeliveryRadio.value.click();
  }
};
</script>
