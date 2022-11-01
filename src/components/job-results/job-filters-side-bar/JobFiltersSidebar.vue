<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button
            text="Clear Filters"
            type="secondary"
            @click="clearUserJobFilterSelection"
          />
        </div>
      </div>

      <accordion header="Skills and Qualifications">
        <JobFiltersSidebarSkills />
      </accordion>

      <accordion header="Degrees">
        <job-filters-side-bar-checkbox-group
          :uniqueValues="uniqueDegrees"
          mutation="ADD_SELECTED_DEGREES"
        />
      </accordion>

      <accordion header="Job Types">
        <job-filters-side-bar-checkbox-group
          :uniqueValues="uniqueJobTypes"
          mutation="ADD_SELECTED_JOB_TYPES"
        />
      </accordion>

      <accordion header="Organizations">
        <job-filters-side-bar-checkbox-group
          :uniqueValues="uniqueOrganizations"
          mutation="ADD_SELECTED_ORGANIZATIONS"
        />
      </accordion>
    </section>
  </div>
</template>

<script setup>
import JobFiltersSidebarSkills from "@/components/job-results/job-filters-side-bar/JobFiltersSidebarSkills.vue";
import Accordion from "@/components/shared/Accordion.vue";
import ActionButton from "@/components/shared/ActionButton.vue";
import JobFiltersSideBarCheckboxGroup from "@/components/job-results/job-filters-side-bar/JobFiltersSidebarCheckboxGroup.vue";
import { useStore } from "vuex";
const store = useStore();
import { useRoute } from "vue-router";
const route = useRoute();

import {
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueDegrees,
} from "@/store/composables";
import { onMounted } from "vue";

const uniqueJobTypes = useUniqueJobTypes();
const uniqueOrganizations = useUniqueOrganizations();
const uniqueDegrees = useUniqueDegrees();

const clearUserJobFilterSelection = () => {
  store.commit("CLEAR_USER_JOB_FILTER_SELECTIONS");
};

const parseSkillsSearchTerm = () => {
  const role = route.query.role || "";
  store.commit("UPDATE_SKILLS_SEARCH_TERM", role);
};

onMounted(() => {
  parseSkillsSearchTerm();
});
</script>
