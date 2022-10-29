<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const spotlights = ref([]);

onMounted(async () => {
  const baseUrl = "http://localhost:3000/spotlights";

  const response = await axios.get(baseUrl);
  spotlights.value = response.data;
});
</script>
