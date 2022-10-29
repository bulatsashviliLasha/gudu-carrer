<template>
  <accordion :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="value in uniqueValues" :key="value" class="w-1/2 h-8">
            <input
              v-model="selectedValues"
              :value="value"
              :id="value"
              type="checkbox"
              class="mr-3"
              @change="selectValue"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import Accordion from "@/components/shared/Accordion.vue";

const props = defineProps({
  mutation: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  uniqueValues: {
    type: Set,
    required: true,
  },
});

const store = useStore();
const router = useRouter();

const selectedValues = ref([]);

const selectValue = () => {
  store.commit(props.mutation, selectedValues.value);
  router.push({ name: "job-results" });
};
</script>
