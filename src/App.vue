<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col font-Manrope">
    <Navbar />
    <RouterView />
  </div>
</template>
