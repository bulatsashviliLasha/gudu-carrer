<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const imageLink = ref(
  "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png"
);
</script>
