<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      type="text"
      placeholder="Computer programming"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
    />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const skillsSearchTerm = computed({
  get() {
    return store.state.skillsSearchTerm;
  },
  set(value) {
    store.commit("UPDATE_SKILLS_SEARCH_TERM", value);
  },
});
</script>
