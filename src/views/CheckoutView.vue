<template>
  <div class="px-32 bg-[#f1f1f1]">
    <div class="pb-12 pt-20">
      <GoBackButton />
    </div>
    <!-- <div class="pb-40 grid grid-cols-[2fr,1fr] gap-8"> -->
    <!-- <div class="bg-white shadow-lg px-12 py-16 rounded-lg"> -->

    <form class="grid grid-cols-[2fr,1fr] gap-8">
      <div class="bg-white shadow-lg px-12 py-16 rounded-lg">
        <h1 class="transform: uppercase text-3xl font-bold tracking-wide mb-12">
          Checkout
        </h1>
        <!-- Billing Details -->
        <p
          class="transform: uppercase text-[#D87D4A] font-bold tracking-wide mb-4"
        >
          Billing details
        </p>
        <div class="grid grid-cols-2 gap-8 mb-16">
          <div class="flex flex-col gap-2">
            <label class="font-bold">Name</label>
            <input
              @input="validateInput('name')"
              class="border p-4 rounded-lg"
              type="text"
              placeholder="Andrew Jones"
              required
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="font-bold">Email</label>

            <input
              @input="validateInput('email')"
              class="border p-4 rounded-lg"
              type="email"
              placeholder="anrew@gmail.com"
              required
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="font-bold">Phone Number</label>
            <input
              @input="validateInput('phoneNumber')"
              class="border p-4 rounded-lg"
              type="number"
              placeholder="+995 555 555 555"
              required
            />
          </div>
        </div>

        <!-- Shipping Info -->
        <p
          class="transform: uppercase text-[#D87D4A] font-bold tracking-wide mb-4"
        >
          Shipping info
        </p>
        <div class="flex flex-col gap-8 mb-8">
          <label>Address</label>
          <input
            @input="validateInput('address')"
            class="w-full border p-4 rounded-lg"
            type="text"
            placeholder="110 Rustaveli Avenue"
            required
          />
        </div>
        <div class="grid grid-cols-2 gap-8 mb-16">
          <div class="flex flex-col gap-2">
            <label class="font-bold">Zip Code</label>
            <input
              @input="validateInput('zipCode')"
              class="border p-4 rounded-lg"
              type="number"
              placeholder="6000"
              required
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="font-bold">City</label>
            <input
              @input="validateInput('city')"
              class="border p-4 rounded-lg"
              type="text"
              placeholder="London"
              required
            />
          </div>
          <div class="flex flex-col gap-2 mb-8">
            <label class="font-bold">Country</label>
            <input
              @input="validateInput('country')"
              class="border p-4 rounded-lg"
              type="text"
              placeholder="UK"
              required
            />
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
              @click="handleDivClick('eMoneyRadio')"
            >
              <input
                type="radio"
                id="e-money"
                name="drone"
                value="e-money"
                checked
                ref="eMoneyRadio"
                required
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
                required
              />
              <label for="cash on Delivery">Cash on Delivery</label>
            </div>
          </div>
        </div>

        <!-- Card Details -->
        <div class="grid grid-cols-2 gap-8">
          <div class="flex flex-col">
            <label>e-Money Number</label>
            <input
              @input="validateInput('cardNumber')"
              class="w-full border p-4 rounded-lg"
              type="number"
              placeholder="467432947"
              required
            />
          </div>
          <div class="flex flex-col">
            <label>e-Money PIN</label>
            <input
              @input="validateInput('pin')"
              class="w-full border p-4 rounded-lg"
              type="number"
              placeholder="6823"
              required
            />
          </div>
        </div>
      </div>

      <!-- Proceed with payment -->

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
            @click.prevent="submitForm"
            type="submit"
            class="w-full bg-[#D87D4A] font-bold mt-4 px-8 py-4 transform: uppercase tracking-wider text-white text-xs hover:opacity-70 transition-opacity"
          >
            Continue & Pay
          </button>
        </div>
      </div>
    </form>
    <!-- </div> -->

    <!-- Summary -->
    <!-- </div> -->
    <Modal :modalActive="modalActive" @close-modal="toggleModal" />
  </div>
</template>

<script setup>
import GoBackButton from "../components/GoBackButton.vue";
import Modal from "../components/Modal.vue";
import { useProductStore } from "../stores/Product";
import { ref } from "vue";

const productStore = useProductStore();
const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

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

const formData = ref({
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  cardNumber: "",
  pin: "",
});
const validationResults = Object.fromEntries(
  Object.keys(formData.value).map((key) => [key, false])
);

const validationPatterns = {
  name: /^[A-Za-z]{2,}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  address: /.+/,
  zipCode: /^\d{5}$/,
  city: /^[A-Za-z\s]{2,}$/,
  country: /^[A-Za-z\s]{2,}$/,
  cardNumber: /^\d{16}$/,
  pin: /^\d{4}$/,
  phoneNumber: /^(5|599|591|592|593|594|595|596|597|598)\d{6}$/,
};

const validateInput = (fieldName) => {
  const input = formData.value[fieldName];
  const pattern = validationPatterns[fieldName];
  // validationResults[fieldName] = pattern.test(input);
  if (!input) {
    validationResults[fieldName] = true;
  } else {
    validationResults[fieldName] = pattern.test(input);
  }
};

const submitForm = () => {
  const invalidFields = Object.keys(validationResults).filter(
    (fieldName) => !validationResults[fieldName]
  );

  if (invalidFields.length === 0) {
    console.log("All inputs filled correctly:", formData.value);
    toggleModal();
  } else {
    const invalidFieldNames = invalidFields.join(", ");
    alert(`Please fill the following fields correctly: ${invalidFieldNames}`);
    console.log(`Invalid fields: ${invalidFieldNames}`);
  }
};

// const submitForm = () => {
//   if (Object.values(validationResults).every((result) => result)) {
//     console.log("All inputs filled correctly:", formData.value);
//     toggleModal();
//   } else {
//     alert("Please fill all required fields");
//     console.log("Some inputs are not correct.");
//   }
// };
</script>
