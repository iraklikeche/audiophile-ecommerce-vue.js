import { ref, computed } from "vue";
import { defineStore } from "pinia";
import data from "../data.json";

export const useProductStore = defineStore("product", () => {
  const productData = ref(data);

  const cart = ref([]);
  const productIndex = computed(() => cart.value.length);

  const addItemToCart = (product) => {
    cart.value.push(product);
    console.log(cart.value);
  };

  const getCart = computed(() => cart.value);

  const totalPrice = computed(() => {
    return cart.value.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  });
  const totalPriceCheckout = computed(() => {
    return cart.value.reduce((total, item) => {
      return total + item.price * item.quantity + 50;
    }, 0);
  });

  // const cartItems = computed(() => cart.value.length);

  const getCategoryDataByName = (categoryName) => {
    return productData.value.filter((item) => item.category === categoryName);
  };
  const getProductById = (id) => {
    // console.log("Searching for product with id:", id);

    // Convert the id to a number (since it's stored as a string in route params)
    const productId = parseInt(id);

    // Use find to search for the product by id
    const product = productData.value.find((item) => item.id === productId);
    return product;
  };

  const clearCart = () => {
    cart.value = [];
  };

  return {
    productData,
    getCategoryDataByName,
    getProductById,
    productIndex,
    addItemToCart,
    getCart,
    totalPrice,
    totalPriceCheckout,
    clearCart,
  };
});
