<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter text-8xl mb-14">
      <span :class="actionClasses">{{ action }}</span> <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Gudu</h2>
  </section>
</template>

<script setup>
import { ref, computed, onBeforeUnmount, onBeforeMount } from "vue";

import nextElementInList from "@/utils/nextElementInList.js";

const action = ref("Build");
const interval = ref(null);

const actionClasses = computed(() => {
  return {
    [action.value.toLowerCase()]: true,
  };
});

const changeTitle = () => {
  interval.value = setInterval(() => {
    const actions = ["Build", "Create", "Design", "Code"];
    action.value = nextElementInList(actions, action.value);
  }, 3000);
};

onBeforeMount(() => {
  changeTitle();
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
