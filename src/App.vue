<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen font-Manrope bg-[#0E0E0E]">
    <Navbar />
    <RouterView />
  </div>
</template>
