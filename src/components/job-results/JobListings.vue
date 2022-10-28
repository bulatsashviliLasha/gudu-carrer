<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'job-results', query: { page: previousPage } }"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'job-results', query: { page: nextPage } }"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import JobListing from "@/components/job-results/JobListing.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  computed: {
    ...mapGetters(["FILTERED_JOBS_BY_ORGANIZATIONS"]),
    currentPage() {
      return +(this.$route.query.page || "1");
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : null;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(
        this.FILTERED_JOBS_BY_ORGANIZATIONS.length / 10
      );
      return nextPage <= maxPage ? nextPage : null;
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return this.FILTERED_JOBS_BY_ORGANIZATIONS.slice(
        firstJobIndex,
        lastJobIndex
      );
    },
  },
  methods: {
    ...mapActions(["FETCH_JOBS"]),
  },
  async mounted() {
    await this.FETCH_JOBS();
  },
};
</script>

<style scoped></style>
