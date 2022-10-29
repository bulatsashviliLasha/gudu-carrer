<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <job-filters-side-bar-checkbox-group
        :uniqueValues="uniqueJobTypes"
        header="Job Types"
        mutation="ADD_SELECTED_JOB_TYPES"
      />

      <job-filters-side-bar-checkbox-group
        :uniqueValues="uniqueOrganizations"
        header="Organizations"
        mutation="ADD_SELECTED_ORGANIZATIONS"
      />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import JobFiltersSideBarCheckboxGroup from "@/components/job-results/job-filters-side-bar/JobFiltersSideBarCheckboxGroup.vue";

import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    JobFiltersSideBarCheckboxGroup,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueOrganizations = useUniqueOrganizations();

    return { uniqueJobTypes, uniqueOrganizations };
  },
};
</script>
