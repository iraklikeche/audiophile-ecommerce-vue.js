import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import data from "../data.json";

export const useProductStore = defineStore("product", () => {
  const productData = ref(data);
  const showCart = ref(false);

  const cart = ref([]);
  const productIndex = computed(() => cart.value.length);

  // const addItemToCart = (product) => {
  //   cart.value.push(product);
  // };

  const addItemToCart = (product) => {
    cart.value.push(product);
    console.log(cart.value);
  };

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
    // cart.value.forEach((item) => {
    //   // Reset properties of each item to their initial values
    //   item.name = ""; // Set the name to an empty string or the initial name value
    //   item.image = ""; // Set the image to an empty string or the initial image value
    //   item.quantity = ""; // Reset the quantity to 0 or the initial quantity value
    //   item.price = "";
    // });
    showCart.value = !showCart.value;
    cart.value = []; // Reset the cart array
    console.log(cart.value);
  };

  console.log(cart.value);

  return {
    cart,
    productData,
    getCategoryDataByName,
    getProductById,
    productIndex,
    addItemToCart,
    totalPrice,
    totalPriceCheckout,
    clearCart,
  };
});
