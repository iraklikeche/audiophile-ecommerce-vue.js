<template>
  <div>
    <h1>this is {{ category }}</h1>
    <p>Hi {{ categoryData[0].name }}</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import categoryData from "../data.json";
import { useProductStore } from "../stores/Product.js";

const route = useRoute();
const category = computed(() => route.params.category);
// const categoryData = ref([]);

const categoryStore = useProductStore();

onMounted(() => {
  categoryStore.setCategoryData(categoryData);
});

console.log(categoryData);
</script>
