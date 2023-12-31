<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 mb-32 lg:gap-36 gap-20 items-center justify-center px-8 lg:px-32"
  >
    <!-- Desktop -->
    <div
      :class="{ 'order-1': index % 2 === 0, 'order-2': index % 2 !== 0 }"
      class="hidden lg:block"
    >
      <img :src="product.categoryImage.desktop" alt="123" />
    </div>

    <!-- Tablet -->
    <div class="hidden md:block">
      <img :src="product.categoryImage.tablet" alt="123" />
    </div>

    <!-- Mobile -->
    <div class="sm:hidden">
      <img :src="product.categoryImage.mobile" alt="123" />
    </div>
    <div
      class="flex flex-col gap-6 items-center lg:items-start"
      :class="{ 'order-2': index % 2 === 0, 'order-1': index % 2 !== 0 }"
    >
      <h3
        class="text-[#D87D4A] font-medium text-base transform: uppercase tracking-[10px]"
      >
        New Product
      </h3>
      <h2
        class="text-4xl font-bold transform: uppercase text-center lg:text-left"
      >
        {{ product.name }}
      </h2>
      <p
        class="text-black opacity-50 font-sm font-medium leading-6 text-center lg:text-left"
      >
        {{ product.description }}
      </p>

      <div v-if="showAddToCart" class="mt-4 flex flex-col gap-4">
        <span class="tracking-widest">$ {{ product.price }}</span>
        <div class="flex gap-5 mt-4">
          <input
            type="number"
            class="bg-[#f1f1f1] pl-2 lg:w-1/3"
            placeholder="0"
            v-model="quantity"
          />
          <button
            @click="addToCart(product)"
            class="text-white text-xs bg-btnDefault hover:opacity-70 py-3 px-6 tracking-[1px] font-bold transition-opacity transform: uppercase"
          >
            Add to cart
          </button>
        </div>
        <Transition name="foo">
          <span v-if="isVisible" class="text-[#D87D4A]"
            >Product Added To Cart.</span
          >
        </Transition>
      </div>
      <div class="mt-4">
        <SeeProductDetails v-if="!showAddToCart" :product-id="product.id" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.foo-enter-active,
.foo-leave-active {
  transition: opacity 2s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.foo-enter-from,
.foo-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { useProductStore } from "../stores/Product";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import SeeProductDetails from "./SeeProductDetails.vue";

const productStore = useProductStore();
const { cart } = storeToRefs(productStore);
const quantity = ref(1);
const isVisible = ref(false);

const addToCart = (product) => {
  const existingItem = productStore.cart.find((item) => item.id === product.id);
  if (existingItem) {
    // If the item already exists in the cart, increment its quantity
    existingItem.quantity += quantity.value;
  } else {
    // If the item is not in the cart, add it as a new entry
    productStore.addItemToCart({
      id: product.id,
      slug: product.slug,
      image: product.image.desktop,
      name: product.name,
      price: product.price,
      quantity: quantity.value,
    });
  }

  isVisible.value = true;
  setTimeout(() => {
    isVisible.value = false;
  }, 1500); // 2000 milliseconds = 2 seconds

  // console.log(product, "add to cart product");
};

const props = defineProps({
  product: Object,
  index: Number,
  categoryProducts: Array,
  showAddToCart: Boolean,
});
</script>
