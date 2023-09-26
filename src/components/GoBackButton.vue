<template>
  <button @click="goBack" class="text-black opacity-50">Go Back</button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  // Use router.go(-1) to navigate back one step in the history.
  router.go(-1);
};
</script>
