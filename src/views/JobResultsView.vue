<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/job-results/job-filters-side-bar/JobFiltersSidebar.vue";
import JobListings from "@/components/job-results/JobListings.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
};
</script>

<style scoped></style>
