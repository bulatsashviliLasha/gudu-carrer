<template>
  <accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in uniqueJobTypes"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              v-model="selectedJobTypes"
              :value="jobType"
              :id="jobType"
              type="checkbox"
              class="mr-3"
              @change="selectJobType"
            />
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useUniqueJobTypes } from "@/store/composables";
import Accordion from "@/components/shared/Accordion.vue";

const store = useStore();
const router = useRouter();

const selectedJobTypes = ref([]);
const uniqueJobTypes = useUniqueJobTypes();

const selectJobType = () => {
  store.commit("ADD_SELECTED_JOB_TYPES", selectedJobTypes.value);
  router.push({ name: "job-results" });
};
</script>
