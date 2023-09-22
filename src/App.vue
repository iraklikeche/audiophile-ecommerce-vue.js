<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col font-Manrope">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
