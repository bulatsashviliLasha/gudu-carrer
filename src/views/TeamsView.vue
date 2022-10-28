<template>
  <header-container>
    <!--  v-slot: or # both are same  -->
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template v-slot:subtitle>
      <h2 class="w-full my-4 text-base font-light">
        Working here is awesome! Why don't you join us?
      </h2>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from "@/components/shared/HeaderContainer.vue";
export default {
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
};
</script>

<style scoped></style>
